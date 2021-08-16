import React from "react";
import styles from "./Login.module.css";
import LoginBox from './LoginBox';
import Logo from './Logo';


function Login({ setClientUser }) {
  return (
    <div className="AppBackground">
      <div className={styles.Login}>
        <Logo />
        <LoginBox {...{setClientUser}} />
      </div>
    </div>
  );
}

export default Login;
