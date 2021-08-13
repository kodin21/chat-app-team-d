import React, { memo } from 'react'
import styles from '../LeftSideBar.module.css';

function Logo() {
  return (
    <div className={styles.LogoContainer}>
      <div className={styles.Logo} />
    </div>
  )
}

export default memo(Logo)
