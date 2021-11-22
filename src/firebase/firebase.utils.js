
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyBL1KQ6WqbQruMiQJnTD20v5GSPrH11Ik0",
  authDomain: "crwn-db-b9af1.firebaseapp.com",
  projectId: "crwn-db-b9af1",
  storageBucket: "crwn-db-b9af1.appspot.com",
  messagingSenderId: "825804287768",
  appId: "1:825804287768:web:a0fa208784f57dde0eb86d",
  measurementId: "G-5Z85SLHFGK"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;