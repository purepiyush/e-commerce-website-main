// import firebase from "firebase";
import {initializeApp} from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
// import {auth} from 'firebase/auth'
const db = require("firebase/database")


const firebaseConfig = {
  apiKey: "AIzaSyDnD_DnmR84QFA-q8QhljIM4L-k473IcNU",
  authDomain: "clone-4a007.firebaseapp.com",
  projectId: "clone-4a007",
  storageBucket: "clone-4a007.appspot.com",
  messagingSenderId: "252738182614", 
  appId: "1:252738182614:web:98c8871b2d89682a7c9877"
};

const firebaseApp = initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
const auth = getAuth();

// const auth = require('firebase/auth');
export { db, auth ,createUserWithEmailAndPassword,signInWithEmailAndPassword};
