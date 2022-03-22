import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { dispatchGetUser, dispatchLogin, fetchUser } from '../../redux/actions/authAction'
import { Navigate } from 'react-router-dom'
import { baseUrl } from '../../../config'


const Redirect = () => {
  const dispatch = useDispatch()
  const token = useSelector(state => state.token)
  const auth = useSelector(state => state.auth)
  const firstEntry = JSON.parse(localStorage.getItem('firstEntry'))


  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedAgoraUser')
    const firstLogin = localStorage.getItem('firstLogin')
    if (firstLogin && loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      const refreshtoken = user.refresh_token

      const getToken = async () => {
        const res = await axios.post(`${baseUrl}/api/refresh_token`, { refreshtoken })
        console.log(res)
        dispatch({ type: 'GET_TOKEN', payload: res.data.access_token })
      }
      getToken()

    }
  }, [auth.isLogged, dispatch])

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        dispatch(dispatchLogin())
        return await fetchUser(token).then(res => {
          dispatch(dispatchGetUser(res))
        })
      }
      getUser()
    }

  }, [token, dispatch])
  return (
    <>
      <div>
        <div>
          <p>Redirigiendo..</p>
          {firstEntry ? <Navigate replace to="/formprofile" /> : <Navigate replace to="/" />}
        </div>
      </div>

    </>
  )
}

export default Redirect
