import React from 'react'
import style from './NotFound.module.css'
import robot from './../../assets/images/robot.png'

const NotFound = () => {
    return (
        <div className={style.NotFound} >
            <div>
                <img className={style.imgNotFound} src={robot} alt="robot" />
            </div>
        </div>
    )
}

export default NotFound