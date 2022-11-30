import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { showErrMsg, showSuccessMsg } from "../../../utils/notification";
import { useDispatch } from "react-redux";
import { baseUrl } from "../../../../config";

import styles from "./Login.module.css";
import Icon_home from '../../../assets/icons/Icon_home'
import logo from "../../../assets/images/programate-academy-blancos.png";
import littleLogo from "../../../assets/images/logo-a.png";

const initialState = {
  email: "",
  password: "",
  err: "",
  success: "",
};

function Login() {
  const [user, setUser] = useState(initialState); //Inicializo hooks
  const dispatch = useDispatch(); //Inicializo hooks
  const navigate = useNavigate(); //Inicializo hooks

  const { email, password, success } = user;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseUrl}/api/login`, {
        email,
        password,
      });

      setUser({ ...user, err: "", success: res.data.msg });
      window.localStorage.setItem("firstLogin", true);
      localStorage.getItem('firstEntry') == null ? window.localStorage.setItem("firstEntry", true) : "";
      window.localStorage.setItem("loggedAgoraUser", JSON.stringify(res.data));
      showSuccessMsg(success);

      navigate("/redirect");
    } catch (err) {
      showErrMsg(err.response.data.error);
      err.response.data.error &&
        setUser({ ...user, err: err.response.data.error, success: "" });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerLeft}>
        <img src={logo} alt="Logo de programate" />
      </div>
      <div className={styles.containerRight}>
        <div className={styles.containerRightHeader}>
          <Icon_home width={150} height={100} />
          <h3>Bienvenido a Codery App</h3>
        </div>
        <form className={styles.containerRightForm} onSubmit={handleSubmit}>
          <input
            placeholder="Correo Electronico"
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
          <input
            type="Password"
            placeholder="Contraseña"
            name="password"
            value={password}
            onChange={handleChangeInput}
          />
          <button className={styles.buttonLogin} type="submit">
            INGRESAR
          </button>
          <Link  className={styles.forgotPassword} to="/forgot_password">¿Olvidaste la contraseña?</Link>
        </form>

      </div>
    </div>
  );
}

export default Login;
