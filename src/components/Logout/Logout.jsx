import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import './Logout.css'
import { baseUrl } from '../../../config'

function Logout() {
  const auth = useSelector(state => state.auth)

  const { user, isLogged } = auth


  const handleLogout = async () => {
    try {
      await axios.get(`${baseUrl}/api/logout`)
      window.localStorage.removeItem('firstLogin')
      window.location.href = "/login";
    } catch (err) {
      window.location.href = "/login";
    }
  }

  const userLink = () => {
    return <li className="drop-nav">
      <Link to="#" className="avatar">
        <img src={user.avatar} alt="" /> {user.firstName} <i className="fas fa-angle-down"></i>
      </Link>
      <ul className="dropdown">
        <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
      </ul>
    </li>
  }

  const transForm = {
    transform: isLogged ? "translateY(-5px)" : 0
  }

  return (
    <header>
      <div className="logo">
        <h1><Link to="/">RED SOCIAL</Link></h1>
      </div>

      <ul style={transForm}>

        {
          isLogged
            ? userLink()
            : <li><Link to="/login"><i className="fas fa-user"></i> Sign in</Link></li>
        }

      </ul>
    </header>
  )
}

export default Logout