import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBeUyAX02Tq5Mc1YvyTTIo-wH-Zu_w40SQ",
  authDomain: "web-app-903e0.firebaseapp.com",
  projectId: "web-app-903e0",
  storageBucket: "web-app-903e0.appspot.com",
  messagingSenderId: "1075591096942",
  appId: "1:1075591096942:web:41a380fe742986186e147f",
  measurementId: "G-WQ1RECMF2V",
};
// Initialize Firebase
export const fb = firebase.initializeApp(
  firebaseConfig
); /* to use firebase storage we must import this  */
// firebase.analytics();

export const db = firebase.firestore();
export const dbMenuAdd = db.collection("menuItems");
