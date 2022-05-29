const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const Game = require("./models/game");

const port = 3000;
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

server.listen(port, () => {
  console.log(`Server start on port ${port}`);
})

let availableRooms = [];
const games = {};

const emitMenuData = () =>{
  io.to("menu").emit("data",{
    room : "menu",
    availableRooms,
  });
}
const emitRoomData = (roomName) =>{
  io.to(roomName).emit("data",{room: games[roomName].data()})
}

io.on("connection", (socket) => {
  console.log(`[SOCKET CONNECTED] ${socket.id}`);
  socket.emit("connected");

  /*socket.on("new-message", (message) => {
    io.emit("received-message", message);
    socket.broadcast.emit("notification", message);
  })*/

  socket.join("menu");
  emitMenuData();
//tema4 ex3
 /* socket.on("new-message",({name, message, roomName})=>{
    socket.broadcast.to(roomName).emit("notification",`${name}: a trimis un mesaj!`);
    io.to(roomName).emit("received-message",`${name}: ${message}`);
  })*/
  socket.on("new-message",(message)=>{
    io.to(socket.data.room).emit("received-message",message);
  })

  socket.on("create-room",(roomName)=>{
    if(availableRooms.indexOf(roomName) === -1 && roomName !== "menu"){
      availableRooms.push(roomName);
      games[roomName] = new Game(roomName);
      socket.data.room = roomName;
      socket.leave("menu");
      socket.join(roomName);
      emitRoomData(roomName);
      emitMenuData();
    }else{
      socket.emit("create-room-error");
    }
    
  })

  socket.on("join-room",(roomName)=>{
    socket.leave("menu");
    games[roomName].addPlayer();
    socket.join(roomName);
    socket.data.room = roomName;
    availableRooms = availableRooms.filter((room) => room !== roomName);
    emitRoomData(roomName);
    emitMenuData();
  })
});

