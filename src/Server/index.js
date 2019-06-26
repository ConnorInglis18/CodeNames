const io = require('socket.io')();

let players = {};
let gameId = 0;
let beenFirstPlayer = false;


const PORT = process.env.PORT || 3231;
io.listen(PORT, () => console.log('listening on port: ',PORT));

io.on('connection', function(socket) {
  // here you can start emitting events to the client 
  // io.emit sends to everyone
  // socket.emit sends to the indiviual

  if(Object.keys(players).length >= 4) {
    socket.disconnect();
  }

  if(!beenFirstPlayer) {
    gameId = Math.floor(Math.random() * 100000);
    socket.emit("firstPlayer", true);
    socket.emit("message", "you are the first player");
    beenFirstPlayer = !beenFirstPlayer;
  }

  socket.emit("gameId", gameId);

  socket.on("submitRegisterPlayer", function(playerName) {
    players[playerName] = null;
    socket.emit("registerPlayer", playerName);

    let lobby = [];
    for (let player in players) {
      lobby.push(player);
    }
    let info = {
      "numPlayers": Object.keys(players).length,
      "lobbyList": lobby
    }
    io.emit("playerCount", info);
  })

  socket.on("createGameBoard", function(url) {
    io.emit("createGameBoard", url);
  })

  socket.on("registerPlayerRole", function(content) {
    players[content["playerName"]] = content["role"];
    socket.emit("registerUserRole", content["role"]);
    let roles = [];
    for(let player in players) {
      if(players[player] !== null) {
        roles.push(players[player])
      }
    }
    io.emit("registerNewRoll", roles)
  })

  socket.on("cardClicked", function(tileId) {
    //io.emit("message", tileId);
    io.emit("cardClicked", tileId);
  })

  socket.on("clueWordSubmit", function(clueWordValue) {
    io.emit("clueWordGiven", clueWordValue)
  })

  socket.on('disconnect', function () {
    //TODO
    //socket.emit("findWhoDisconnected");

    players = {};
    beenFirstPlayer = false;
    gameId = 0;

    // if(Object.keys(players).length === 1) {
    //   socket.emit("deleteAllGames")
    //   players = {};
    //   gameId = 0;
    // }
    //Need to send a disconnect message to delete the game board from the back end
  })

})
