import { db } from "../firebase/config";
import React, { useEffect, useState } from "react";

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

  return <div></div>;
}

export default AddMessage;
