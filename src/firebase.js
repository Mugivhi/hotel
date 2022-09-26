
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAsMp_g31aMzSPQf8NG-3NnDoq6AmRMGC4",
  authDomain: "hotel-auth-eeca7.firebaseapp.com",
  databaseURL: "https://hotel-auth-eeca7-default-rtdb.firebaseio.com",
  projectId: "hotel-auth-eeca7",
  storageBucket: "hotel-auth-eeca7.appspot.com",
  messagingSenderId: "879831074737",
  appId: "1:879831074737:web:095334e5adf2be4f04df90",
};
if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
export{firebase}
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();