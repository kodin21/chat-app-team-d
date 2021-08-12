import React, { memo } from 'react'
import styles from '../Login.module.css';

function Logo() {
  return (
    <div className={styles.Logo}/>
  )
}

export default memo(Logo)
