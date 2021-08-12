/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../LeftSideBar.module.css';

function Channel({
  channelTitle="Title",
  channelUserCount=0,
  channelId="title",
  selectedChannel,
  setSelectedChannel,
}) {
  const history = useHistory();

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
            // Update selected channel
            setSelectedChannel(channelId);
            // Navigate to room
            history.push(channelId)
          }}
        >
          Join
        </span>
      </div>
    </div>
  );
}

export default Channel;
