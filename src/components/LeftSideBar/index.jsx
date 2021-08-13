import React, { useState } from 'react';
import styles from './LeftSideBar.module.css';
import AddNetwork from './AddNetwork';
import Channel from './Channel';
import Logo from './Logo';

function LeftSideBar({ roomsData, userName }) {
  const [selectedChannel, setSelectedChannel] = useState({roomDBId:'general',  roomName:'general'});

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
                  channelUserCount: room.data.connectedUsers.length,
                  channelId: room.data.roomName,
                  channelDBId: room.id,
                  clientUserName: userName,
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
