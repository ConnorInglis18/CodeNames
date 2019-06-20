// var app = require('http').createServer();
// var io = module.exports.io = require('socket.io')(app);

// const PORT = process.env.PORT || 3231;

// const SoceketManager = require('./SocketManager');

// io.on('connection', SoceketManager);

// app.listen(PORT, ()=>{
//   console.log("connected to port: " + PORT);
// })



const io = require('socket.io')();

let board = null;
const players = {"redGiver": null, "blueGiver": null, "redGuesser": null, "blueGuesser": null};

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
    io.emit("turn", "LETS GO EVERYONE!");
  } else {
    socket.disconnect();
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
  })



  socket.on("click", function(tileId) {
    console.log("TileId: " + tileId);
    io.emit("tileClicked", tileId);
  })



})
