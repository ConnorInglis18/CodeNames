const io = require('socket.io')();

let games = {};


const PORT = process.env.PORT || 3231;
io.listen(PORT, () => console.log('listening on port: ',PORT));

io.on('connection', function(socket) {
  // here you can start emitting events to the client 
  // io.emit sends to everyone
  // socket.emit sends to the indiviual

  gameIdRandom = Math.floor(Math.random() * 100000).toString();
  socket.emit("gameIdRandom", gameIdRandom);

  socket.on("gameIdRegistered", function(info) {
    let gameId = info["gameId"];
    let playerName = info["name"];
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
    let gameId = info["gameId"];
    let url = info["url"];
    let pack = info["packType"]
    let content = {"pack":pack, "url":url}
    io.in(gameId).emit("createGameBoard", content);
  })

  socket.on("registerPlayerRole", function(info) {
    let gameId = info["gameId"];
    let role = info["role"];
    let playerName = info["playerName"];
    games[gameId][playerName] = role;
    socket.emit("registerUserRole", role);
    let roles = [];
    for(let playerName in games[gameId]) {
      if(games[gameId][playerName] !== null) {
        roles.push(games[gameId][playerName])
      }
    }
    io.in(gameId).emit("registerNewGameRoll", roles)
  })

  socket.on("cardClicked", function(info) {
    let gameId = info["gameId"]
    let tileId = info["tileId"]
    io.in(gameId).emit("cardClicked", tileId);
  })

  socket.on("clueWordSubmit", function(info) {
    let gameId = info["gameId"]
    let clueWord = info["clueWord"]
    io.in(gameId).emit("clueWordGiven", clueWord)
  })

  socket.on('disconnect', function () {
    //TODO
    //socket.emit("findWhoDisconnected");
    games = {};

    // if(Object.keys(players).length === 1) {
    //   socket.emit("deleteAllGames")
    //   players = {};
    //   gameId = 0;
    // }
    //Need to send a disconnect message to delete the game board from the back end
  })

})
