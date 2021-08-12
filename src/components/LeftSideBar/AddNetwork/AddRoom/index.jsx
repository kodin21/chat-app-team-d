import React from 'react'
import styles from '../../LeftSideBar.module.css';

function AddRoom({setOpenAddMenu}) {
  return (
    <div className={styles.AddRoomContainer}>
      <input
        type="text"
        className={styles.PopupInput}
        id="popupInput"
        placeholder="New Room Name"
        onClick={(event)=>{
          event.stopPropagation();
        }}
        onKeyDown={(event)=>{
          if(event.key === "Escape" || event.key === "Enter") {
            event.preventDefault();
            setOpenAddMenu(isOpen=>!isOpen);
          }
        }}
      />
    </div>
  )
}

export default AddRoom
