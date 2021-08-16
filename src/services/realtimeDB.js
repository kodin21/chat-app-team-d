import firebase from './firebase';
import 'firebase/database';

const db = firebase.database();

export function ConnectUser(userObject, roomID) {
  const connectionRef = db.ref(`/rooms/${roomID}/${userObject.userID}`);
  // Create user object for connection
  connectionRef.set(userObject);
  // Listen disconnect and pull off from tree
  connectionRef.onDisconnect().remove();

  return connectionRef;
}

function serializeConnectedUsersData(connectedUsersData) {
  const dataObj = connectedUsersData !== (undefined || null) ? Object.keys(connectedUsersData) : [];

  if (dataObj.length === 0) return dataObj; // Stop and return empty array []

  // Return roomId and connected users array for each room
  return dataObj.map((roomID) => ({
    id: roomID,
    connectedUsers: Object.values(connectedUsersData[roomID]),
  }));
}

export function SubscribeConnectedUsersData(setter) {
  const roomsRef = db.ref(`/rooms`);
  // Subscribe to rooms data
  roomsRef.on('value', (snapshot) => {
    let data = snapshot.val(); // Rooms' object or array

    // Serialize data for use
    data = serializeConnectedUsersData(data);

    setter(data); // Callback for state setter
  });
}
