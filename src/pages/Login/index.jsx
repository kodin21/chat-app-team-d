import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./Login.module.css";


function Login({ setUsername }) {
  const history = useHistory();

  return (
    <div className="AppBackground">
      <div className={styles.Login}>
        <div className={styles.Logo}/>
        <div className={styles.LoginBox}>
          <div className={styles.LoginBoxTitle}>Join US!</div>
          <div className={styles.LoginBoxMain}>
            <span>Grab a username!</span>
            <input name="username" type="text" />
            <button
              type="button"
              onClick={() => {
                setUsername("test");
                history.push("rooms");
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
