import firebase from 'firebase/app';
import firebaseConfig from '../config/firebase';
import 'firebase/firestore';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;