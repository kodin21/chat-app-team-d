import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCD0gU520qZxJlzp8NSQbXT33ApMJv4600",
    authDomain: "kodin-chat-app.firebaseapp.com",
    databaseURL: "https://kodin-chat-app-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "kodin-chat-app",
    storageBucket: "kodin-chat-app.appspot.com",
    messagingSenderId: "798134430934",
    appId: "1:798134430934:web:5c0649d4a8dce7448fed77"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db= firebase.firestore();
