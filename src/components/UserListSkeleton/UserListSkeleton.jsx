import React from 'react'
import styles from './UserListSkeleton.module.css'

function UsersListSkeleton() {
    return (
        <div className={styles.card}>
            <div className={styles.img}></div>
            <div className={styles.text}>
                <div className={styles.name}></div>
                <div className={styles.cohort}></div>
            </div>
        </div>
    )
}

export default UsersListSkeleton;