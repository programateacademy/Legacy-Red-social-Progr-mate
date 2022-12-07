import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { dispatchGetUser, dispatchLogin, fetchUser } from '../../redux/actions/authAction'
import styles from "./DontAllow.module.css"
import { baseUrl } from '../../../config'


const DontAllow = () => {
  const dispatch = useDispatch()
  const token = useSelector(state => state.token)
  const auth = useSelector(state => state.auth)



  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedAgoraUser')
    const firstLogin = localStorage.getItem('firstLogin')
    if (firstLogin && loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      const refreshtoken = user.refresh_token

      const getToken = async () => {
        const res = await axios.post(`${baseUrl}/api/refresh_token`, { refreshtoken })
        dispatch({ type: 'GET_TOKEN', payload: res.data.access_token })
      }
      getToken()

    }
  }, [auth.isLogged, dispatch])

  useEffect(() => {
    if (token) {
      const getUser = () => {
        dispatch(dispatchLogin())
        return fetchUser(token).then(res => {
          dispatch(dispatchGetUser(res))
        })
      }
      getUser()
    }

  }, [token, dispatch])
  return (

    /*<div className="allow">
      No tienes permisos para esta página.
    </div> */

    <section className={styles.access_container}>

      <div className={styles.notallowed_container}>
        <h1 className={styles.title_container}>405 Not Allowed</h1>
      </div>

      {/* <picture className={styles.card_img}>
          <img src={ImgAccess} alt="sin-acceso" className={styles.notaccess} />
      </picture> */}

    </section>
  )
}

export default DontAllow
