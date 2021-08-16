import React, { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { SubscribeRoomsData } from '../../services/fireStore';
import styles from './Rooms.module.css';
import LeftSideBar from '../../components/LeftSideBar';
import Room from '../../components/Room';
import { SubscribeConnectedUsersData } from '../../services/realtimeDB';

function Rooms({clientUser}) {
  const match = useRouteMatch();
  const [roomsData, setRoomsData] = useState([]);
  const [connectedUsers, setConnectedUsers] = useState([]);

  useEffect(() => {
    // Initiate rooms data subscription
    SubscribeRoomsData(setRoomsData);

    // Initiate conencted users data for rooms
    SubscribeConnectedUsersData(setConnectedUsers)
  }, []);

  return (
    <div className="AppBackground">
      <div className={styles.App}>
        <LeftSideBar {...{ roomsData, clientUser, connectedUsers }} />
        <Switch>
          <Route path={`${match.path}/:roomId`}>
            <Room {...{ roomsData, clientUser, connectedUsers }} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Rooms;
