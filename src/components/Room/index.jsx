import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { SubscribeMessages } from '../../services/fireStore';
import { ConnectUser } from '../../services/realtimeDB';
import styles from './Room.module.css';
import OnlineUsersCount from './OnlineUsersCount';
import MessageInput from './MessageInput';
import OnlineUser from './OnlineUser';
import RoomHeader from './RoomHeader';
import Message from './Message';

const PlaceholderData = {
  id: 'general',
  data: {
    displayName: 'General',
    roomName: 'general',
    connectedUsers: [],
    createdAt: 1628675400,
  },
};

function Room({ roomsData, clientUser, connectedUsers }) {
  const { roomId } = useParams();
  const history = useHistory();
  const [messagesData, setMessagesData] = useState([]);

  // Filter room from rooms data
  const roomData = roomsData.filter(room=> room.id === roomId);
  
  // If the room is not in data use placeholder
  const filteredRoomData = roomData.length > 0 ? roomData : [PlaceholderData];
  const roomTitle = filteredRoomData[0].data.displayName;

  // Connected users of current room
  const roomConnectedUsers = (id) => connectedUsers[id] !== undefined ? Object.values(connectedUsers[id]) : [];

  useEffect(() => {
    // If roomId doesn't exists in database navigate to general
    if(roomData.length === 0){
      history.replace("/room/general")
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (window.unsubscribe) window.unsubscribe();

    // Subscribe to messages data
    SubscribeMessages(roomId, setMessagesData);

    // Connect user to real time database for listen
    const connectionRef = ConnectUser(clientUser, roomId);

    // Force removing connection for each room change
    return () => connectionRef.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId]);

  return (
    <div className={styles.Room}>
      <RoomHeader title={roomTitle} />
      <div className={styles.Main}>
        <div className={styles.Messages}>
          <div className={styles.MessageList}>
            {messagesData.length > 0 &&
              messagesData.map((message) => (
                <Message
                  key={message.id}
                  {...{
                    userName: message.data.senderID,
                    userColor: 'plum',
                    messageTime: message.data.createdAt.toDate().toString(),
                    messageContent: message.data.message,
                  }}
                />
              ))}
          </div>
        </div>
        <div className={styles['Online-Users']}>
          <OnlineUsersCount count={roomConnectedUsers.length} />
          <div className={styles.UserListContainer}>
            <div className={styles.UserList}>
              {roomConnectedUsers(roomId).map((user) => (
                <OnlineUser
                  key={user.userID + roomId}
                  {...{ userName: user.userName, userColor: user.userColor }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <MessageInput {...{ roomId, userName: clientUser.userName }} />
    </div>
  );
}

export default Room;
