import {db} from '../config/firebase'

async function ReadUsersFromRoom(roomName ){
    const roomRef = db.collection("chat-rooms");
    const users = [];
    await roomRef.where("roomName", "==", roomName).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            doc.data().connectedUsers.forEach(user=> users.push(user))
        });
    });
    console.log(users)
    return users;
}

export default ReadUsersFromRoom;
