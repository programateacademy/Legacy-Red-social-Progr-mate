import React from 'react'
import style from './isla.module.css'

const islaFlotante = () => {
  return (
    <>
      <div className={style.contenedor}>
        <button className={style.botonF1} id="btnF1" >
          <span><i class="fa-solid fa-sun"></i></span>
        </button>
      </div>
    </>
  )
}

export default islaFlotante;

