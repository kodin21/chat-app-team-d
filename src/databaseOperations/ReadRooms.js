import {db} from '../config/firebase'

async function ReadRooms() {
    const rooms=[];
    const roomRef = db.collection("chat-rooms");
    await roomRef.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            rooms.push(doc.data().displayName);
        });
    })
    return rooms;

  }

export default ReadRooms;
