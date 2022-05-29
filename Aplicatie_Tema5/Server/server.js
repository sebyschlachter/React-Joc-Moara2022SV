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

let answers = [
  {
    answer : "da",
    count : 3,
    percent: 75
  },
  {
    answer : "nu",
    count : 1,
    percent: 25
  }
]
io.on("connection", (socket)=>{
    console.log("a socket connected");
    socket.emit("connected");
    socket.emit("answers",answers);

    socket.on("new-answer",(answerReceived)=>{
      let newAnswer = true; 
      answers.forEach((item)=>{
        if(item.answer === answerReceived){
          item.count = item.count+1; 
          newAnswer = false;
        }
      })
      if(newAnswer == true){
        answers.push({answer:answerReceived,count:1});
      }
      let totalAnswers = answers.reduce((accumulator, answer) => {return accumulator + answer.count}, 0);
      answers.forEach((item)=>{
        item.percent = ((item.count * 100)/totalAnswers).toFixed(0);
      })
      answers.sort((a, b) => parseFloat(b.count) - parseFloat(a.count));
      io.emit("answers",answers);
    })
})