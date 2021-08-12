/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styles from '../LeftSideBar.module.css';

function Channel({
  channelTitle,
  channelUserCount,
  channelId,
  selectedChannel,
  setSelectedChannel,
}) {
  return (
    <div
      id={channelId}
      className={selectedChannel === channelTitle ? styles.SelectedChannel : styles.Channel}
    >
      <span className={styles.ChannelTitle}>{channelTitle}</span>
      <div className={styles.ChannelConnection}>
        <span className={styles.ChannelUserCount}>{channelUserCount} </span>
        <span
          className={styles.ChannelJoinButton}
          tabIndex="0"
          role="button"
          onClick={() => {
            setSelectedChannel(channelTitle);
          }}
        >
          Join
        </span>
      </div>
    </div>
  );
}

export default Channel;
