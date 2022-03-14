import React from "react";
import styles from "../Notifications/Notifications.module.css";
import { Notifications } from "./Notifications";
import reminder from "./notifications.json";

/* This is the father component of notifications */
const Notification = () => {
    return (
        <aside className={styles.main}>
            <div className={styles.cardContainer}>
                <h2>Notificaciones</h2>
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