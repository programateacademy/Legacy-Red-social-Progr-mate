import React, { useState } from "react";
import axios from "axios";
import { isEmail } from "../../../utils/validation";
import { showErrMsg, showSuccessMsg } from "../../../utils/notification";
import logo from "../../../assets/images/logo-a.png";
import styles from "./ForgotPassword.module.css";
import { baseUrl } from "../../../../config";
import { Link } from "react-router-dom";
import Icon_home from "../../../assets/icons/Icon_home";
const initialState = {
  email: "",
  err: "",
  success: "",
};

function ForgotPassword() {
  const [data, setData] = useState(initialState);

  const { email, err, success } = data;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value, err: "", success: "" });
  };

  const forgotPassword = async (e) => {
    e.preventDefault();
    if (!isEmail(email))
      return setData({
        ...data,
        err: "El email es incorrecto",
        success: "",
      });

    try {
      const res = await axios.post(`${baseUrl}/api/forgot`, { email });

      showSuccessMsg(res.data.msg);
      setData({ ...data, err: "", success: res.data.msg });
    } catch (err) {
      showErrMsg(err.response.data.msg);
      err.response.data.msg &&
        setData({ ...data, err: err.response.data.msg, success: "" });
    }
  };

  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <Icon_home width={150} height={100} />
        <h2 className={styles.containerTitle}>Recuperar contraseña</h2>
        <p className={styles.containerInfo}>
          Ingresa tu correo electrónico y te enviaremos un mensaje para restablecer la contraseña.
        </p>
        <form className={styles.containerForm} onSubmit={forgotPassword}>
          {err && showErrMsg(err)}
          {success && showSuccessMsg(success)}
          <input
            className={styles.containerFormInput}
            label="Ingresa tu correo electronico"
            placeholder="Correo Electrónico"
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
          <input
            type="submit"
            className={styles.containerFormBtn}
            onClick={forgotPassword}
            value="Recuperar contraseña"
          />
        </form>
        <Link className={styles.containerNavigate} to="/">Regresar al Login</Link>
      </div>
    </main>
  );
}

export default ForgotPassword;
