import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { showErrMsg, showSuccessMsg } from '../../../utils/notification'
import { isLength, isMatch } from '../../../utils/validation'
import './ResetPassword.css'
import logo from '../../../assets/images/logo-blanco-alta-.png'
import { baseUrl } from '../../../../config'

const initialState = {
  password: '',
  cf_password: '',
  err: '',
  success: ''
}

function ResetPassword() {
  const [data, setData] = useState(initialState)
  const { token } = useParams()

  const { password, cf_password, err, success } = data

  const handleChangeInput = e => {
    const { name, value } = e.target
    setData({ ...data, [name]: value, err: '', success: '' })
  }

  const handleResetPass = async () => {
    if (isLength(password))
      return setData({
        ...data,
        err: 'La contraseña debe tener al menos 6 caracteres',
        success: ''
      })

    if (!isMatch(password, cf_password))
      return setData({
        ...data,
        err: 'Las contraseñas no coinciden.',
        success: ''
      })

    try {
      const res = await axios.post(
        `${baseUrl}/api/reset`,
        { password },
        {
          headers: { Authorization: token }
        }
      )
      showSuccessMsg(res.data.msg)
      setData({ ...data, err: '', success: res.data.msg })
    } catch (err) {
      showErrMsg(err.response.data.msg)
      err.response.data.msg &&
        setData({ ...data, err: err.response.data.msg, success: '' })
    }
  }
  return (
    <div className='container-main-resetPassword'>
      <div className='container-resetPassword'>
        <img className='logo' src={logo} alt='logo' />
        <h2 className='title-resetPassword'>RESTABLECER CONTRASEÑA</h2>
        <div className='container-info-resetPassword'>
          {err && showErrMsg(err)}
          {success && showSuccessMsg(success)}
          <input
            label='Contraseña'
            placeholder='******'
            name='password'
            value={password}
            onChange={handleChangeInput}
          />
          <input
            label='Confirmar contraseña'
            placeholder='******'
            name='cf_password'
            value={cf_password}
            onChange={handleChangeInput}
          />
          <button className='button-resetPassword' onClick={handleResetPass}>
            Cambiar contraseña
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
