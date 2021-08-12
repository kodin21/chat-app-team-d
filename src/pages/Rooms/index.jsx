import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import styles from './Rooms.module.css';
import LeftSideBar from '../../components/LeftSideBar';
import Room from '../../components/Room';

function Rooms() {
  const match = useRouteMatch();

  return (
    <div className="AppBackground">
      <div className={styles.App}>
        <LeftSideBar />
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
