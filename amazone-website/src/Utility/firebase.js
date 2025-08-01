
import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZNyUW0hcOOFPAncWIa-Iv4M0-01rgYsE",
  authDomain: "clone-3e43d.firebaseapp.com",
  projectId: "clone-3e43d",
  storageBucket: "clone-3e43d.firebasestorage.app",
  messagingSenderId: "743364153755",
  appId: "1:743364153755:web:bebff81c69dc97e465913e",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=app.firestore();