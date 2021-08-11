import {db} from '../firebase/config'

function CreateChatRoom(roomName) {
    const fixedRoomName = roomName.replace(' ', '-');

    db.collection("chat-rooms").add({
        connectedUsers:[],
        displayName: roomName,
        roomName: fixedRoomName
    })
        .then((docRef) => {
            console.log("Room is created ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}

export default CreateChatRoom;