import React from 'react';
import styles from '../Room.module.css';

function OnlineUsersCount({ count }) {
  return <div className={styles.OnlineUsersTitle}>{count} people here</div>;
}

export default OnlineUsersCount;
