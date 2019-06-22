// var app = require('http').createServer();
// var io = module.exports.io = require('socket.io')(app);

// const PORT = process.env.PORT || 3231;

// const SoceketManager = require('./SocketManager');

// io.on('connection', SoceketManager);

// app.listen(PORT, ()=>{
//   console.log("connected to port: " + PORT);
// })



const io = require('socket.io')();

//let board = null;
const players = {"redGiver": null, "blueGiver": null, "redGuesser": null, "blueGuesser": null};
let numPlayers = 0;
let gameId = 0;

const PORT = process.env.PORT || 3231;
io.listen(PORT);
console.log('listening on port: ',PORT);

io.on('connection', function(socket) {
  // here you can start emitting events to the client 
  // io.emit sends to everyone
  // socket.emit sends to the indiviual
  if(players["redGiver"] == null) {
    players["redGiver"] = socket;
    socket.emit("assignRole", "redGiver");
  } else if (players["blueGiver"] == null) {
    players["blueGiver"] = socket;
    socket.emit("assignRole", "blueGiver");
  } else if (players["redGuesser"] == null) {
    players["redGuesser"] = socket;
    socket.emit("assignRole", "redGuesser");
  } else if (players["blueGuesser"] == null) {
    players["blueGuesser"] = socket;
    socket.emit("assignRole", "blueGuesser");
    //io.emit("turn", "LETS GO EVERYONE!");
  } else {
    socket.disconnect();
  }

  if(numPlayers === 0) {
    gameId = Math.floor(Math.random() * 10000);
    numPlayers += 1;
    socket.emit("gameId", gameId);
  } else if (numPlayers >= 4) {
    // TODO -- Create functions
    socket.emit("tooManyPlayers");
  } else {
    numPlayers += 1;
    socket.emit("gameId", gameId);
  }


  socket.on('disconnect', function () {
    if (players['redGiver'] === socket) {
      players['redGiver'] = null
    } else if (players['blueGiver'] === socket) {
      players['blueGiver'] = null
    } else if (players['redGuesser'] === socket) {
      players['redGuesser'] = null
    } else if (players['blueGuesser'] === socket) {
      players['blueGuesser'] = null
    }

    if(numPlayers === 1) {
      socket.emit("deleteAllGames")
      numPlayers = 0;
      gameId = 0;
    } else {
      numPlayers -= 1;
    }
    //Need to send a disconnect message to delete the game board from the back end
  })



  socket.on("click", function(tileId) {
    io.emit("tileClicked", tileId);
  })



})
