import React from "react";
import styles from "./Room.module.css";

function Room() {
  return (
    <div className="AppBackground">
      <div className={styles.App}>
        <div className={styles["Left-Sidebar"]}>
          <div className={styles.LogoContainer}>
            <div className={styles.Logo}>Logo</div>
          </div>
          <div className={styles.ChannelsList}>
            <div className={styles.ChannelsListContainer}>
              <div className={styles.Channel}>
                <span className={styles.ChannelTitle}>Title</span>
                <div className={styles.ChannelUserCount}>22 </div>
                <span className={styles.ChannelJoinButton}>Join</span>
              </div>
            </div>
          </div>
          <div className={styles.AddNetwork}>AddNetwork</div>
        </div>
        <div className={styles.Room}>
          <div className={styles["Room-Title"]}>{"{channel.title}"}</div>
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
              <div className={styles.OnlineUsersTitle}>Online Users</div>
              <div className={styles.UserList}>
                <div className={styles.UserListContainer}>
                  <div className={styles.User}>User</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["Message-Input"]}>Message Input</div>
        </div>
      </div>
    </div>
  );
}

export default Room;
