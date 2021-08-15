import firebase from './firebase';
import 'firebase/database';

const db = firebase.database();

export function ConnectUser(userObject, roomID){
  const connectionRef = db.ref(`/rooms/${roomID}`);
  // Create user object for connection
  connectionRef.push(userObject);
  // Listen disconnect and pull off from tree
  connectionRef.onDisconnect().remove();

  return connectionRef;
}

export function SubscribeConnectedUsersData(setter){
  const roomsRef = db.ref(`/rooms`);
  // Subscribe to rooms data
  roomsRef.on('value', (snapshot)=>{
    const data = snapshot.val(); // Rooms' object or array

    setter(data); // Callback for use
  })

}