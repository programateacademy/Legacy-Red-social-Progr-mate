import React from "react";
import styles from "./Notifications.module.css";

export const Notifications = (noti) => {
    return (
        <section>
            <div className={styles.containerHome}>
                <div className={styles.notificationContainer}>
                    <div className={styles.topbar}>
                        <div className={styles.tittle}></div>

                        <div className={styles.notification}>
                            <ul>
                                <li className={styles.first}>
                                    {noti.user_info}
                                </li>
                                <li className={styles.fuzzy_space}>
                                    {noti.type}
                                </li>
                            </ul>
                            <ul>
                                <li className={styles.fuzzy_first}>
                                    {noti.date}
                                </li>
                                <li className={styles.fuzzy_small_space}></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};