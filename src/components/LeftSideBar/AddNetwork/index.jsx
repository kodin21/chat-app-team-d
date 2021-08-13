/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { memo, useState } from 'react';
import styles from '../LeftSideBar.module.css';
import AddRoom from './AddRoom';

function AddNetwork() {
  const [openAddMenu, setOpenAddMenu] = useState(false);
  return (
    <div
      className={styles.AddNetwork}
      role="button"
      tabIndex="0"
      onClick={() => {
        setOpenAddMenu(!openAddMenu);
      }}
    >
      <span>Add Room</span>
      <button type="button" className={styles.AddNetworkButton}>
        +
      </button>
      {openAddMenu && <AddRoom {...{ setOpenAddMenu }} />}
    </div>
  );
}

export default memo(AddNetwork);
