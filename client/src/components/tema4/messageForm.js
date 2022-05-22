import { useState } from "react";

const MessageForm = ({ socket }) => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const sendMessage = () => {
    socket.emit("new-message", name + ": " + message);
    setMessage("");
  }
  const handleMessageInputChange = (e) => {
    setMessage(e.target.value);
  }
  const handleNameInputChange = (e) => {
    setName(e.target.value);
  }
  return (
    <>
      <input
        value={name}
        placeholder="Enter your name"
        type="text"
        onChange={handleNameInputChange}
      ></input>
      <input
        value={message}
        placeholder="Enter a message"
        type="text"
        onChange={handleMessageInputChange}
      ></input>
      <button onClick={sendMessage}>Send message</button>
    </>
  )
}

export default MessageForm;