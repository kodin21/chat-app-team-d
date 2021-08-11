import React from "react";
import styles from "./Room.module.css";

function Room() {
  return (
    <div className="AppBackground">
      <div className={styles.App}>
        <div className={styles["Left-Sidebar"]}>
          <div className={styles.LogoContainer}>
            <div className={styles.Logo}/>
          </div>
          <div className={styles.ChannelsList}>
            <div className={styles.ChannelsListContainer}>
              <div className={styles.SelectedChannel}>
                <span className={styles.ChannelTitle}>Title</span>
                <div className={styles.ChannelConnection}>
                  <span className={styles.ChannelUserCount}>22 </span>
                  <span className={styles.ChannelJoinButton}>Join</span>
                </div>
              </div>
              <div className={styles.Channel}>
                <span className={styles.ChannelTitle}>Title - 2</span>
                <div className={styles.ChannelConnection}>
                  <span className={styles.ChannelUserCount}>11 </span>
                  <span className={styles.ChannelJoinButton}>Join</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.AddNetwork}>
            <span>Add Network</span>
            <span className={styles.AddNetworkButton}>+</span>
          </div>
        </div>
        <div className={styles.Room}>
          <div className={styles.RoomHeader}>
            <span className={styles.RoomTitle}>{"{channel.title}"}</span>
          </div>
          <div className={styles.Main}>
            <div className={styles.Messages}>
              <div className={styles.MessageList}>
                <div className={styles.Message}>
                  <div className={styles.UserAvatarContainer}>
                    <div className={styles.UserAvatar}>
                      A
                    </div>
                  </div>
                  <div className={styles.MessageBody}>
                    <div className={styles.MessageTitle}>
                      <span className={styles.Username}>Username</span>
                      <span className={styles.TimeStamp}>22&apos;Aug - 12:50</span>
                    </div>
                    <span className={styles.MessageContent}>
                      Message
                    </span>
                  </div>
                </div>
              </div>              
            </div>            
            <div className={styles["Online-Users"]}>
              <div className={styles.OnlineUsersTitle}>22 people here</div>
              <div className={styles.UserListContainer}>
                <div className={styles.UserList}>
                  <div className={styles.User}>
                    <span className={styles.UserPointer}>-</span>
                    <span className={styles.Username}>User - 1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.MessageInputContainer}>
            <input type="text" className={styles.MessageInput} placeholder="Write down your message"/>
            <div className={styles.MessageSendButtonContainer}>
            <button type="button" className={styles.MessageSendButton}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room;
