import React from "react";
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import styles from "./Rooms.module.css";
import Room from "../../components/Room";

function Rooms() {
  const match = useRouteMatch();
  
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
            <span>Add Room</span>
            <button type="button" className={styles.AddNetworkButton}>
              +
            </button>
            <div className={styles.AddRoomContainer}>
            <input type="text" className={styles.PopupInput} id="popupInput" placeholder="New Room Name"/>
            </div>
          </div>
        </div>
        <Switch>
          <Route path={`${match.path}/:roomId`}>
            <Room />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Rooms;
