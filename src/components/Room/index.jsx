import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { SubscribeMessages } from '../../services/fireStore';
import { ConnectUser } from '../../services/realtimeDB';
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
    displayName: 'General',
    roomName: 'general',
    connectedUsers: [],
    createdAt: 1628675400,
  },
};

function Room({ roomsData, clientUser }) {
  const { roomId } = useParams();
  const history = useHistory();
  const [messagesData, setMessagesData] = useState([]);

  const filteredRoomData =
    roomsData.length > 0
      ? roomsData.filter((room) => room.data.roomName === roomId)[0]
      : PlaceholderData;

  console.log(filteredRoomData);
  
  // let roomData = roomsData.filter(room=> room.data.roomName === roomId);





  useEffect(() => {
    // If roomId doesn't exists in database navigate to general
    if(filteredRoomData.length === 0){
      history.replace('room/general');
    }

    // Connect user to real time database for listen
    const connectionRef = ConnectUser(clientUser, filteredRoomData.id)

    // Force removing connection for each room change
    return () => connectionRef.remove();  
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
          </div>
        </div>
        <div className={styles['Online-Users']}>
          <OnlineUsersCount count={filteredRoomData.data.connectedUsers.length} />
          <div className={styles.UserListContainer}>
            <div className={styles.UserList}>
              {filteredRoomData?.data?.connectedUsers?.map((user) => (
                <OnlineUser key={user} {...{ userName: user.userName, userColor: randomColor() }} />
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
