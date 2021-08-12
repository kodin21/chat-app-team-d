import React from "react";
import { add } from '../../services/fireStore';
import styles from "./Login.module.css";
import LoginBox from './LoginBox';
import Logo from './Logo';


function Login({ setUsername }) {
  add();
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
