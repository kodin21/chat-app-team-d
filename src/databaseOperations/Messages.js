import { db } from "../firebase/config";

function AddMessage(roomName, userName, message) {
  db.collection("messages")
    .add({
      message: "",
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
