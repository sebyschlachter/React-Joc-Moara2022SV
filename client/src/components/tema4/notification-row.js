import { useEffect, useState } from "react";

const NotificationRow = ({ notification }) => {
    const [loaded, setLoaded] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoaded(false);
        }, 5000);
    }, []);

    if (loaded) {
        return (
            <li className="notification2" >{notification}</li>
        )
    }

}

export default NotificationRow;