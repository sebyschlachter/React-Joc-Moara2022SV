import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';
import Feedback from './components/feedback';

function App() {
  const [connectedSocket, setConnectedSocket] = useState();
  const [feedbacks, setFeedbacks] = useState([]);
  const [selectedBox, setSelectedBox] = useState(false);
  const [selectedBoxId, setSelectedBoxId] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    const socket = io();
    socket.on("connected", () => {
      setConnectedSocket(socket);
    });
    socket.on("feedbacks", (feedBacksArray) => {
      setFeedbacks(feedBacksArray);
    });
  }, []);
  const selectBox = (id, feedback) => {
    if (feedback === "") {
      setSelectedBox(true);
      setSelectedBoxId(id);
      setError();
    } else {
      setSelectedBox(false);
      setSelectedBoxId("");
      setError("Feedback was made!");
    }
  }

  return (
    <div className="App">
      < Feedback socket={connectedSocket} selectedBox={selectedBox} selectedBoxId={selectedBoxId} />
      {error ? <p className="error">{error}</p> : null}
      {feedbacks.map((items, index) => {
        return (
          <div key={index}>
            <ul className='d-flex'>
              {items.map((subItems, sIndex) => {
                return <div
                  key={sIndex} className='feedback'
                  style={{ backgroundColor: `${subItems['color']}`, border: subItems['id'] === selectedBoxId ? '2px solid red' : '1px solid black' }}
                  onClick={() => selectBox(subItems['id'], subItems['feedback'])}
                >{subItems['feedback']} </div>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default App;
