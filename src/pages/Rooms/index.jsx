import React, { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
// import { SubscribeRoomsData } from '../../services/fireStore';
import styles from './Rooms.module.css';
import LeftSideBar from '../../components/LeftSideBar';
import Room from '../../components/Room';

function Rooms({userName}) {
  const match = useRouteMatch();
  // eslint-disable-next-line no-unused-vars
  const [roomsData, setRoomsData] = useState([]);

  useEffect(() => {
    // Initiate rooms data subscription
    // SubscribeRoomsData(setRoomsData);
  }, []);

  return (
    <div className="AppBackground">
      <div className={styles.App}>
        <LeftSideBar {...{ roomsData, userName }} />
        <Switch>
          <Route path={`${match.path}/:roomId`}>
            <Room {...{ roomsData, userName }} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Rooms;
