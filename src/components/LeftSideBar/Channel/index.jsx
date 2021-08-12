/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styles from '../LeftSideBar.module.css';

function Channel({
  channelTitle="Title",
  channelUserCount=0,
  channelId="title",
  selectedChannel,
  setSelectedChannel,
}) {
  return (
    <div
      id={channelId}
      className={selectedChannel === channelId ? styles.SelectedChannel : styles.Channel}
    >
      <span className={styles.ChannelTitle}>{channelTitle}</span>
      <div className={styles.ChannelConnection}>
        <span className={styles.ChannelUserCount}>{channelUserCount} </span>
        <span
          className={styles.ChannelJoinButton}
          tabIndex="0"
          role="button"
          onClick={() => {
            setSelectedChannel(channelId);
          }}
        >
          Join
        </span>
      </div>
    </div>
  );
}

export default Channel;
