import React from 'react'
import {useParams} from "react-router-dom";
import styles from "./Room.module.css";
import MessageInput from "./MessageInput";
import RoomHeader from "./RoomHeader";

function Room() {
  const {roomId} = useParams();
  return (
    <div className={styles.Room}>
    <RoomHeader roomTitle={roomId} />
    <div className={styles.Main}>
      <div className={styles.Messages}>
        <div className={styles.MessageList}>
          <div className={styles.Message}>
            <div className={styles.UserAvatarContainer}>
              <div className={styles.UserAvatar}>
                A
              </div>
            </div>
            <div className={styles.MessageBody}>
              <div className={styles.MessageTitle}>
                <span className={styles.Username}>Username</span>
                <span className={styles.TimeStamp}>22&apos;Aug - 12:50</span>
              </div>
              <span className={styles.MessageContent}>
                Message
              </span>
            </div>
          </div>
        </div>              
      </div>            
      <div className={styles["Online-Users"]}>
        <div className={styles.OnlineUsersTitle}>22 people here</div>
        <div className={styles.UserListContainer}>
          <div className={styles.UserList}>
            <div className={styles.User}>
              <span className={styles.UserPointer}>-</span>
              <span className={styles.Username}>User - 1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MessageInput />
  </div>
  )
}

export default Room
