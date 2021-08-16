import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useHistory, useParams } from 'react-router-dom';
import { SubscribeMessages } from '../../services/fireStore';
import { ConnectUser } from '../../services/realtimeDB';
import styles from './Room.module.css';
import OnlineUsersCount from './OnlineUsersCount';
import MessageInput from './MessageInput';
import OnlineUser from './OnlineUser';
import RoomHeader from './RoomHeader';
import Message from './Message';

function Room({ roomsData, clientUser, connectedUsers }) {
  const { roomId } = useParams();
  const history = useHistory();
  const [messagesData, setMessagesData] = useState([]);

  // Filter room from rooms data
  const filteredRoomData = roomsData.filter(room=> room.id === roomId);
  const roomData = filteredRoomData.length === 0 ? [] : filteredRoomData;
  const roomTitle = roomData.length === 0 ? "Room.Title" : roomData[0].data.displayName;

  // Connected users of current room
  const filteredConnectedUsers = connectedUsers.filter(room=>room.id === roomId);
  const roomConnectedUsers =
    filteredConnectedUsers.length === 0
      ? []
      : filteredConnectedUsers[0].connectedUsers;

  console.log(messagesData);

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
            {messagesData.map((message) => (
                <Message
                  key={message.id}
                  {...{
                    userName: message.data.senderID,
                    userColor: 'plum',
                    messageTime: moment(message.data?.createdAt?.toDate()).format('MMM Do YYYY, h:mm:ss a'),
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
              {roomConnectedUsers.map((user) => (
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
