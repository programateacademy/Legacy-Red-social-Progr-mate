import React from 'react'
import style from './SkeletonPost.module.css'


/* Skeleton for posts */
function SkeletonPost() {
    return (
        <div className={style.card}>
            <div className={style.infoUserContainer}>
                <div className={style.avatar}></div>
                <div className={style.infoUser}>
                    <div className={style.name}></div>
                    <div className={style.cohort}></div>
                </div>
            </div>
            <div className={style.infoPost}>
                <div className={style.title}></div>
                <div className={style.info}></div>
                <div className={style.info}></div>
                <div className={style.info2}></div>
                <div className={style.tagsContainer}>
                    <div className={style.tags}></div>
                    <div className={style.tags}></div>
                    <div className={style.tags}></div>
                </div>
            </div>
            <div className={style.postImage}></div>
        </div>
    )
}


export default SkeletonPost