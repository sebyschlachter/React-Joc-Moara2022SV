import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';
import Question from './components/question';

function App() {
  const [connectedSocket, setConnectedSocket] = useState();
  const [answers, setAnswers]  = useState([]);
  useEffect(() => {
    const socket = io();
    socket.on("connected", () => {
      setConnectedSocket(socket);
    });
    socket.on("answers", (answersArray) => {
     setAnswers(answersArray);
    });
  }, []);
  return (
    <div className="App">
      < Question socket={connectedSocket}/>
      <div className='graph-box'>
      {answers.map((answer, index) => {
              return (
                <div 
                  key={index} 
                  style={{width:`${answer['percent']}%`,height:300,backgroundColor:'red',opacity:`${answer['percent']/100}`}}>
                </div>
              )
          })}
      </div>
      <ul>
          {answers.map((answer, index) => {
              return (
              <>
                <div className='d-flex'>
                  <div style={{width:25,height:25,backgroundColor:'red',opacity:`${answer['percent']/100}`}}></div>
                  <div key={index}  >{answer['answer']} - {answer['percent']} %</div>
                </div>
                <br/>
              </>
              )
          })}
        </ul>
    </div>
  );
}

export default App;
