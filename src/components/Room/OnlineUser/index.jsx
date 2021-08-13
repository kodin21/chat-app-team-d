import React, {memo} from 'react';
import styles from '../Room.module.css';

function OnlineUser({ userName, userColor }) {
  return (
    <div className={styles.User}>
      <span className={styles.UserPointer}>-</span>
      <span
        className={styles.Username}
        style={{
          color: `#${userColor}
        `,
        }}
      >
        {userName}
      </span>
    </div>
  );
}

export default memo(OnlineUser);
