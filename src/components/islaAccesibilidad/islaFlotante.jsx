import React from 'react'
import style from './isla.module.css'

const handleTheme = () => {
  const switchTheme = document.getElementById("Switch");

  if (switchTheme.checked) {
    document.getElementById('divGeneral').className = "_8mmV3etezMNNxai+O+lGWQ=="
  } else {
    document.getElementById('divGeneral').className = "EApSIZE9-ruMVIMYPmrOSg=="
  }

}


const islaFlotante = () => {
  return (
    <>
      <label className={style.switch}>
        <input type="checkbox" id="Switch" onClick={handleTheme} />
        <span className={style.slider}></span>
      </label>
    </>
  )
}

export default islaFlotante;

