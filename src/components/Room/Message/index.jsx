import React from 'react';
import styles from '../Room.module.css';

function Message({ userName, userColor, messageTime, messageContent }) {
  return (
    <div className={styles.Message}>
      <div className={styles.UserAvatarContainer}>
        <div className={styles.UserAvatar} style={{ backgroundColor: `${userColor}` }}>
          {userName[0].toUpperCase()}
        </div>
      </div>
      <div className={styles.MessageBody}>
        <div className={styles.MessageTitle}>
          <span className={styles.Username} style={{ color: `${userColor}` }}>
            {userName}
          </span>
          <span className={styles.TimeStamp}>{messageTime}</span>
        </div>
        <span className={styles.MessageContent}>{messageContent}</span>
      </div>
    </div>
  );
}

export default Message;
