import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Room.module.css';
import OnlineUsersCount from './OnlineUsersCount';
import MessageInput from './MessageInput';
import OnlineUser from './OnlineUser';
import RoomHeader from './RoomHeader';
import Message from './Message';

function Room() {
  const { roomId } = useParams();
  return (
    <div className={styles.Room}>
      <RoomHeader title={roomId} />
      <div className={styles.Main}>
        <div className={styles.Messages}>
          <div className={styles.MessageList}>
            <Message
              {...{
                userName: 'Test',
                userColor: 'plum',
                messageTime: "22'Aug 11:00",
                messageContent: 'Hello World!',
              }}
            />
          </div>
        </div>
        <div className={styles['Online-Users']}>
          <OnlineUsersCount count={22} />
          <div className={styles.UserListContainer}>
            <div className={styles.UserList}>
              <OnlineUser {...{userName: "User - 1",userColor: "plum"}} />
            </div>
          </div>
        </div>
      </div>
      <MessageInput />
    </div>
  );
}

export default Room;
