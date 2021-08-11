import {db} from '../config/firebase'

function AddMessage(roomName, userName, message) {
  db.collection("messages")
    .add({
      message: message,
      room_name: roomName,
      user: userName,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}

export default AddMessage;
