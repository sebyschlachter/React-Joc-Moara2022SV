const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const port = 3000;
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

server.listen(port, () => {
  console.log(`Server start on port ${port}`);
});

let feedbacks = [
  [
    { id: "00", feedback: "", color: "white" },
    { id: "01", feedback: "", color: "white" },
    { id: "02", feedback: "", color: "white" }],
  [
    { id: "10", feedback: "", color: "white" },
    { id: "11", feedback: "", color: "white" },
    { id: "12", feedback: "", color: "white" }],
  [
    { id: "20", feedback: "", color: "white" },
    { id: "21", feedback: "", color: "white" },
    { id: "22", feedback: "", color: "white" }]
]
const colors = ["blue", "red", "yellow", "green", "orange", "brown", "pink", "purple", "aqua"];
io.on("connection", (socket) => {
  console.log("a socket connected");
  socket.emit("connected");
  socket.emit("feedbacks", feedbacks);

  socket.on("new-feedback", (feedbackReceived) => {
    let id = feedbackReceived.split(':')[0];
    let feedback = feedbackReceived.split(':')[1];
    let color = colors[Math.floor(Math.random() * 10)];
    feedbacks.map((items) => {
      items.map((subItems) => {
        if (subItems['id'] == id && subItems['feedback'].length == 0) {
          subItems['feedback'] = feedback;
          subItems['color'] = color;
        }
      })
    })
    io.emit("feedbacks", feedbacks);
  })
})