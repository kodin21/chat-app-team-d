import {db} from '../config/firebase'

function AddMessage(roomName, userName, message) {
  const roomRef = db.collection("chat-rooms");
  const users = [];
  await roomRef.where("roomName", "==", roomName).collection("messages").add({
    createdAt : Date.now(),
    message: message,
    senderID: userName,
  })
  .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  });

   
}

export default AddMessage;
