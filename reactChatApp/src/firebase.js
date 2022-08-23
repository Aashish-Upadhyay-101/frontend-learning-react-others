import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBk3vEZs7uxxPQXD7KjZXMLarmNRerRKj8",
  authDomain: "aashish-chat-room.firebaseapp.com",
  projectId: "aashish-chat-room",
  storageBucket: "aashish-chat-room.appspot.com",
  messagingSenderId: "493755064526",
  appId: "1:493755064526:web:d9bd46d6683e9fd963f09f",
  measurementId: "G-96T923ZV4Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
