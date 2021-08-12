import React, {memo} from 'react'
import styles from "../Room.module.css";

function MessageInput() {
  return (
    <div className={styles.MessageInputContainer}>
      <input type="text" className={styles.MessageInput} placeholder="Write down your message"/>
      <div className={styles.MessageSendButtonContainer}>
      <button type="button" className={styles.MessageSendButton}>Send</button>
      </div>
    </div>
  )
}

export default memo(MessageInput)
