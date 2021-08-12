import {db} from '../config/firebase'

async function DeleteUserFromRoom(roomName , userName){
    const roomRef = db.collection("chat-rooms");
    const users = [];
    await roomRef.where("roomName", "==", roomName).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            doc.data().connectedUsers.forEach(user=> {
                if(user !== userName) users.push(user)
            })
        });
    });
    console.log(users)
    await roomRef.where("roomName", "==", roomName).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
                    doc.ref.update({
                        connectedUsers : users
                    })
        });
    });
}


export default DeleteUserFromRoom;
