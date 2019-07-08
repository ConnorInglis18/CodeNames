const io = require('socket.io')();

let games = {};

const PORT = process.env.PORT || 3231;
io.listen(PORT, () => console.log('listening on port: ',PORT));

io.on('connection', function(socket) {
  // here you can start emitting events to the client 
  // io.emit sends to everyone
  // socket.emit sends to the indiviual

  let gameId = Math.floor(Math.random() * 100000).toString();
  while(gameId in Object.keys(games)) {
    gameId = Math.floor(Math.random() * 100000).toString();
  }
  let playerName = '';
  let role = null;
  let isInLobby = false;
  let isInGame = false;

  socket.emit("gameIdRandom", gameId);

  socket.on("gameIdRegistered", function(info) {
    gameId = info["gameId"];
    playerName = info["name"];
    isInLobby = true;
    let isGameMade = gameId in games;
    if(isGameMade) {
      if(games[gameId].length >= 4) {
        socket.emit("tooManyPlayers");
        socket.disconnect();
      } else {
        socket.join(gameId)
        games[gameId][playerName] = null;
      }
    } else {
      games[gameId] = {};
      games[gameId][playerName] = null;
      socket.join(gameId)
      socket.emit("firstPlayer", true);
    }
    io.in(gameId).emit("playerCount", Object.keys(games[gameId]));
  })

  socket.on("createGameBoard", function(info) {
    isInGame = true;
    let url = info["url"];
    let pack = info["packType"]
    let content = {"pack":pack, "url":url}
    io.in(gameId).emit("createGameBoard", content);
  })

  socket.on("registerPlayerRole", function(info) {
    role = info["role"];
    games[gameId][playerName] = role;
    socket.emit("registerUserRole", role);
    let roles = [];
    for(let player in games[gameId]) {
      if(games[gameId][player] !== null) {
        roles.push(games[gameId][player])
      }
    }
    io.in(gameId).emit("registerNewGameRoll", roles)
  })

  socket.on("cardClicked", function(tileId) {
    io.in(gameId).emit("cardClicked", tileId);
  })

  socket.on("clueWordSubmit", function(clueWord) {
    io.in(gameId).emit("clueWordGiven", clueWord)
  })

  socket.on('disconnect', function () {
    if(isInLobby) {
      if(isInGame) {
        // TODO - unsure how to handle a player leaving a game
        io.in(gameId).emit("message", playerName + " disconnected")
      } else {
        // if a player leaves a lobby,
        // either the player will be removed or the game will be deleted
        if(Object.keys(games[gameId]).length > 1) {
          delete games[gameId][playerName];
          io.in(gameId).emit("playerCount", Object.keys(games[gameId]))
        } else {
          delete games[gameId];
        }
      }
    }
  })

})
