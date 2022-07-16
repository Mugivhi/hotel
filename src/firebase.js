// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxCd7-r-Z7WyEqANpf7e6tRXt1SLWDoeg",
  authDomain: "hotel-auth-5432c.firebaseapp.com",
  projectId: "hotel-auth-5432c",
  storageBucket: "hotel-auth-5432c.appspot.com",
  messagingSenderId: "512148215825",
  appId: "1:512148215825:web:8a2d006f1d69b9f21579b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth();