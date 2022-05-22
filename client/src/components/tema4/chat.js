import { useEffect, useState } from "react";
import ChatBox from "./chatBox";
import MessageForm from "./messageForm";
import Notification from "./notification";

const Chat = ({ socket }) => {
    return (
        <>
            <div className="d-flex">
                <div>
                    <ChatBox socket={socket} />
                    <MessageForm socket={socket} />
                </div>
                <div>
                    <Notification socket={socket} />
                </div>
            </div>
        </>
    )
}

export default Chat;