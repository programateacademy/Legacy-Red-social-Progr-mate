import React, {useState, useContext, useEffect} from "react";
import styles from "../Notifications/Notifications.module.css";
import { Notifications } from "./Notifications";
import reminder from "./notifications.json";
import { getData } from "../../helpers/fetch";
import { DataContext } from "../../context/DataContext";
/* This is the father component of notifications */
const Notification = () => {
    const { idUser } = useContext(DataContext);
    const [notificationData, setNotficationData] = useState()
    useEffect(() => {
        let isMounted = true
        const set =async () => {
            const data = await getData('notifications', idUser)
            setNotficationData(data)
        }
        set()
        return () => {
            isMounted = false
        }
    },[])
    return ( 
        <aside className={styles.main}>
            <div className={styles.cardContainer}>
                <h2 className={styles.titleNotification}>Notificaciones</h2>
                {reminder.map((noti) => (
                    <Notifications
                        key={noti.idNotifications}
                        idPost={noti.idPost}
                        user_info={noti.user_info}
                        date={noti.date}
                        type={noti.type}
                    />
                ))}
            </div>
        </aside>
    );
};
export default Notification;