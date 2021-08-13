/* eslint-disable no-console */
import firebase from './firebase';
import idfier from '../utils/idfier';
import randomColor from '../utils/randomColor';

const db = firebase.firestore();

export function CreateChatRoom(roomName) {
  const roomRef = db.collection('chat-rooms');

  roomRef
    .add({
      connectedUsers: [],
      displayName: roomName,
      roomName: idfier(roomName),
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then((docRef) => {
      console.log('Room is created ', docRef.id);
    })
    .catch((error) => {
      throw new Error('Error adding document: ', error);
    });
}

export async function AddMessage(roomId, userName, message) {
  const roomRef = db.collection('chat-rooms');

  await roomRef
    .doc(roomId)
    .collection('messages')
    .add({
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      message,
      senderID: userName,
    })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
}

export function AddUser(userName) {
  const usersRef = db.collection('users');

  usersRef
    .add({
      name: userName,
      id: idfier(userName),
      color: randomColor(),
    })
    .then((docRef) => {
      console.log('User written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
}

export async function AddUserToRoom(roomId, userName) {
  const roomRef = db.collection('chat-rooms');

  roomRef.doc(roomId).update({
    connectedUsers: firebase.firestore.FieldValue.arrayUnion(userName),
  });
}

export async function RemoveUserFromRoom(roomId, userName) {
  const roomRef = db.collection('chat-rooms');

  roomRef.doc(roomId).update({
    connectedUsers: firebase.firestore.FieldValue.arrayRemove(userName),
  });
}

export function getUserData(userName) {
  const usersRef = db.collection('users');

  return usersRef
    .where('name', '==', userName)
    .get()
    .then((querySnapshot) => querySnapshot.docs.map((doc) => doc.data())[0]);
}

export function SubscribeRoomsData(setter) {
  const roomsRef = db.collection('chat-rooms');

  roomsRef.orderBy('createdAt').onSnapshot((snapshot) => {
    setter(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
  });
}

export function SubscribeMessages(roomId, setter) {
  const roomsRef = db.collection('chat-rooms');
  const messagesRef = roomsRef.doc(roomId).collection('messages');

  window.unsubscribe = messagesRef.orderBy('createdAt').onSnapshot((snapshot) => {
    setter(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
  });
}

export function add() {}
