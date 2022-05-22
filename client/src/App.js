import { io } from "socket.io-client"
import { useEffect, useState } from "react";
import Chat from "./components/tema4/chat";
//import Rooms from "./components/menu/rooms";
function App() {
  const [connectedSocket, setConnectedSocket] = useState();
  // const [data, setData] = useState();

  useEffect(() => {
    const socket = io();
    socket.on("connected", () => {
      setConnectedSocket(socket);
    });
    /* socket.on("data", (receivedData)=>{
       setData(receivedData);
     })*/
  }, []);

  /*if(!(data && connectedSocket)){
    return(<p>waiting for conection...</p>);
  }*/
  if (!connectedSocket) {
    return (<p>waiting for conection...</p>);
  }


  return (
    <div style={{ padding: 10 }}>
      <h1>Tema 4</h1>
      {/*} {data.room === 'menu' ? 
      (<Rooms socket = {connectedSocket} rooms={data.availableRooms}/>) : 
      (<Chat socket = {connectedSocket} roomName = {data.room}/>)}*/}
      <Chat socket={connectedSocket} />
    </div>

  );
}

export default App;
