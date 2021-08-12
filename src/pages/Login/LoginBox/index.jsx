import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { AddUser } from '../../../services/fireStore';
import styles from '../Login.module.css';

function LoginBox({ setUsername }) {
  const history = useHistory();
  const inputRef = useRef();

  const handleAddUser = () => {
    // Create user with username into database
    AddUser(inputRef.current.value);
    // Set local username for next logins
    setUsername('test');
    // Navigate router to rooms
    history.push('rooms');
  };

  return (
    <div className={styles.LoginBox}>
      <div className={styles.LoginBoxTitle}>Join US!</div>
      <div className={styles.LoginBoxMain}>
        <span>Grab a username!</span>
        <input
          name="username"
          type="text"
          ref={inputRef}
          onKeyDown={(event) => {
            if (event.code === 'Enter') handleAddUser();
          }}
        />
        {/* If username input is empty dont disable click */}
        <button type="button" onClick={() => inputRef.current.value !== "" && handleAddUser()}>
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginBox;
