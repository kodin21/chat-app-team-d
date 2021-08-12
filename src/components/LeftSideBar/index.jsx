import React, { useState } from 'react';
import styles from './LeftSideBar.module.css';
import AddNetwork from './AddNetwork';
import Channel from './Channel';
import Logo from './Logo';

function LeftSideBar() {
  const [selectedChannel, setSelectedChannel] = useState('Title');

  return (
    <div className={styles['Left-Sidebar']}>
      <Logo />
      <div className={styles.ChannelsList}>
        <div className={styles.ChannelsListContainer}>
          <Channel
            {...{
              channelTitle: 'Title',
              channelUserCount: 22,
              channelId: 'title',
              selectedChannel,
              setSelectedChannel,
            }}
          />
           <Channel
            {...{
              channelTitle: 'Title - 2',
              channelUserCount: 11,
              channelId: 'title-2',
              selectedChannel,
              setSelectedChannel,
            }}
          />
        </div>
      </div>
      <AddNetwork />
    </div>
  );
}

export default LeftSideBar;
