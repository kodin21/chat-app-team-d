import React, { useState } from 'react';
import styles from './LeftSideBar.module.css';
import AddNetwork from './AddNetwork';
import Channel from './Channel';
import Logo from './Logo';

function LeftSideBar({ roomsData, connectedUsers, clientUser }) {
  const [selectedChannel, setSelectedChannel] = useState({
    roomDBId: 'general',
    roomName: 'general',
  });

  // Filter connectedusers for 
  const roomConnectedUsers = (roomId) => connectedUsers.filter((room) => room.id === roomId);
  const roomUserCount = (roomId) =>
    roomConnectedUsers(roomId).length === 0 ? 0 : roomConnectedUsers(roomId)[0].connectedUsers.length;

  return (
    <div className={styles['Left-Sidebar']}>
      <Logo />
      <div className={styles.ChannelsList}>
        <div className={styles.ChannelsListContainer}>
          {roomsData?.length > 0 &&
            roomsData.map((room) => (
              <Channel
                key={room.id}
                {...{
                  channelTitle: room.data.displayName,
                  channelUserCount: roomUserCount(room.id),
                  channelId: room.data.roomName,
                  channelDBId: room.id,
                  clientUserName: clientUser.userName,
                  selectedChannel,
                  setSelectedChannel,
                }}
              />
            ))}
        </div>
      </div>
      <AddNetwork />
    </div>
  );
}

export default LeftSideBar;
