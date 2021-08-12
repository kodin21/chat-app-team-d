import React from "react";
import { navigate } from "@reach/router";
import styles from "./Login.module.css";
import DeleteUserFromRoom from "../../databaseOperations/DeleteUserFromRoom";


function Login({ setUsername }) {
  return (
    <div className={styles.AppBackground}>
      <div className={styles.Login}>
        <div className={styles.LoginBox}>
          <div className={styles.LoginBoxTitle}>{"{box.title}"}</div>
          <div className={styles.LoginBoxMain}>
            <span>Kullancı Adı</span>
            <input name="username" type="text" />
            <button
              type="button"
              onClick={() => {
                DeleteUserFromRoom("x","fuat");
                setUsername("test");
                navigate("rooms");
              }}
            >
              Giriş
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
