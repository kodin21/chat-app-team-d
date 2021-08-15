import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AddUserToRoom, SubscribeMessages } from '../../services/fireStore';
import randomColor from '../../utils/randomColor';
import styles from './Room.module.css';
import OnlineUsersCount from './OnlineUsersCount';
import MessageInput from './MessageInput';
import OnlineUser from './OnlineUser';
import RoomHeader from './RoomHeader';
import Message from './Message';

const PlaceholderData = {
  id: "general",
  data: {
    displayName: 'Room.Title',
    roomName: 'room',
    connectedUsers: [],
    createdAt: 1628675400,
  },
};

function Room({ roomsData, clientUser }) {
  const { roomId } = useParams();
  const [messagesData, setMessagesData] = useState([]);
  const filteredRoomData =
    roomsData.length > 0
      ? roomsData.filter((room) => room.data.roomName === roomId)[0]
      : PlaceholderData;

  useEffect(() => {
    // Add user to general room for first run
    AddUserToRoom("general",clientUser.userName);
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(()=>{
    if(window.unsubscribe) window.unsubscribe();
    // Subscribe to messages data
    SubscribeMessages(filteredRoomData.id, setMessagesData);
  },[filteredRoomData.id])

  return (
    <div className={styles.Room}>
      <RoomHeader title={filteredRoomData.data.displayName} />
      <div className={styles.Main}>
        <div className={styles.Messages}>
          <div className={styles.MessageList}>
            {
              messagesData.length > 0 && messagesData.map(message => (
                <Message
                  key={message.id}
                  {...{
                    userName: message.data.senderID,
                    userColor: "plum",
                    messageTime: Date(message.data.createdAt),
                    messageContent: message.data.message
                  }}
                />
              ))
            }
            {/* <Message
              {...{
                userName: 'Test',
                userColor: 'plum',
                messageTime: "22'Aug 11:00",
                messageContent: 'Hello World!',
              }}
            /> */}
          </div>
        </div>
        <div className={styles['Online-Users']}>
          <OnlineUsersCount count={filteredRoomData.data.connectedUsers.length} />
          <div className={styles.UserListContainer}>
            <div className={styles.UserList}>
              {filteredRoomData?.data?.connectedUsers?.map((user) => (
                <OnlineUser key={user} {...{ userName: user, userColor: randomColor() }} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <MessageInput {...{ roomId: filteredRoomData.id, userName: clientUser.userName }} />
    </div>
  );
}

export default Room;
