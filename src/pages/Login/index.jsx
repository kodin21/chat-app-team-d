import React from 'react'
import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.Login}>
      <div className={styles.LoginBox}>
        <div className={styles.LoginBoxTitle}>{"{box.title}"}</div>
        <div className={styles.LoginBoxMain}>
        <span>Kullancı Adı</span>
        <input name="username"  type="text"/>
        <button type="button"> Giriş</button>
        </div>

      </div>
    </div>
  )
}

export default Login
