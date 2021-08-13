/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { AddUserToRoom, RemoveUserFromRoom } from '../../../services/fireStore';
import styles from '../LeftSideBar.module.css';

function Channel({
  channelTitle="Title",
  channelUserCount=0,
  channelId="title",
  channelDBId="general",
  clientUserName,
  selectedChannel,
  setSelectedChannel,
}) {
  const history = useHistory();

  return (
    <div
      id={channelId}
      className={selectedChannel.roomName === channelId ? styles.SelectedChannel : styles.Channel}
    >
      <span className={styles.ChannelTitle}>{channelTitle}</span>
      <div className={styles.ChannelConnection}>
        <span className={styles.ChannelUserCount}>{channelUserCount} </span>
        <span
          className={styles.ChannelJoinButton}
          tabIndex="0"
          role="button"
          onClick={() => {
            // Remove user from previous room
            RemoveUserFromRoom(selectedChannel.roomDBId, clientUserName);
            // Add user to new room
            AddUserToRoom(channelDBId, clientUserName)
            // Update selected channel
            setSelectedChannel({roomDBId: channelDBId,roomName:channelId});
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
