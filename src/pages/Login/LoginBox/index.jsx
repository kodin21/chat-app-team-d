import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { AddUser } from '../../../services/fireStore';
import randomColor from '../../../utils/randomColor';
import idfier from '../../../utils/idfier';
import styles from '../Login.module.css';

function LoginBox({ setClientUser }) {
  const history = useHistory();
  const inputRef = useRef();
  const userColor = randomColor();

  const handleAddUser = () => {
    const typedUsername = inputRef.current.value; // Typed value from username input
    const userObject = {userName: typedUsername, userID: idfier(typedUsername), userColor};

    // Create user with username into database
    AddUser(typedUsername, userColor);
    // Set local username for next logins
    setClientUser(userObject);
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
            if (event.code === 'Enter' && event.target.value !== "") handleAddUser();
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
