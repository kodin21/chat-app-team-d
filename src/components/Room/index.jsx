import React from 'react';
import { useParams } from 'react-router-dom';
import randomColor from '../../utils/randomColor';
import styles from './Room.module.css';
import OnlineUsersCount from './OnlineUsersCount';
import MessageInput from './MessageInput';
import OnlineUser from './OnlineUser';
import RoomHeader from './RoomHeader';
import Message from './Message';

const PlaceholderData = {
  id: 1,
  data: {
    displayName: 'Room.Title',
    roomName: 'room',
    connectedUsers: [],
    createdAt: 1628675400,
  },
};

function Room({ roomsData }) {
  const { roomId } = useParams();
  const filteredRoomData =
    roomsData.length > 0
      ? roomsData.filter((room) => room.data.roomName === roomId)[0]
      : PlaceholderData;

  console.log(filteredRoomData);
  return (
    <div className={styles.Room}>
      <RoomHeader title={filteredRoomData.data.displayName} />
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
          <OnlineUsersCount count={filteredRoomData.data.connectedUsers.length} />
          <div className={styles.UserListContainer}>
            <div className={styles.UserList}>
              {filteredRoomData?.data?.connectedUsers?.map((user) => (
                <OnlineUser key={user} {...{ userName: user, userColor: randomColor() } }/>
              ))}
            </div>
          </div>
        </div>
      </div>
      <MessageInput />
    </div>
  );
}

export default Room;
