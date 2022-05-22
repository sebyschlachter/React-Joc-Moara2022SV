import { useEffect, useState } from "react";
import NotificationRow from "./notification-row";

const Notification = ({ socket }) => {
    const [notifications, setNotifications] = useState([]);
    const [count, setCount] = useState(0);
    const addNotification = (notification) => {
        setNotifications((notifications) => {
            return [...notifications, notification];
        });
    };

    useEffect(() => {
        socket.on("notification", (message) => {
            addNotification(message.split(":")[0] + " a trimis un mesaj!");
            setCount(count + 1);
        });
    }, []);

    return (
        <>
            <h2>Notificari:</h2>
            <ul>
                {notifications.map((notification, index) => {
                    return <NotificationRow key={index} notification={notification} />
                })}
            </ul>
        </>

    )

}

export default Notification;