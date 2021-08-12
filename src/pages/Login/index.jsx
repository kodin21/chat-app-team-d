import React from "react";
import styles from "./Login.module.css";
import LoginBox from './LoginBox';
import Logo from './Logo';


function Login({ setUsername }) {
  return (
    <div className="AppBackground">
      <div className={styles.Login}>
        <Logo />
        <LoginBox {...{setUsername}} />
      </div>
    </div>
  );
}

export default Login;
