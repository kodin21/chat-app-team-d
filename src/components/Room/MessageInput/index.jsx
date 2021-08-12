import React, { memo, useRef } from 'react';
import { AddMessage } from '../../../services/fireStore';
import styles from '../Room.module.css';

function MessageInput({ roomId, userName }) {
  const inputRef = useRef();

  const handleAddMessage = (message) => {
    AddMessage(roomId, userName, message);
  };

  return (
    <div className={styles.MessageInputContainer}>
      <input
        type="text"
        ref={inputRef}
        className={styles.MessageInput}
        placeholder="Write down your message"
        onKeyDown={(event) => {
          if (event.key === 'Enter' && event.target.value !== '') {
            handleAddMessage(event.target.value);

            // eslint-disable-next-line no-param-reassign
            event.target.value = '';
          }
        }}
      />
      <div className={styles.MessageSendButtonContainer}>
        <button
          type="button"
          className={styles.MessageSendButton}
          onClick={() => {
            // Push message via input ref
            if(inputRef.current.value !== ''){
              handleAddMessage(inputRef.current.value);
              // Clear input
              inputRef.current.value = '';
            }
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default memo(MessageInput);
