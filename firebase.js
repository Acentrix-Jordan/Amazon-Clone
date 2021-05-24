import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAmUg1JebWoOQtCH3BA-5l4VuzmrYGB4FM",
  authDomain: "amz-clone-biggyj.firebaseapp.com",
  projectId: "amz-clone-biggyj",
  storageBucket: "amz-clone-biggyj.appspot.com",
  messagingSenderId: "1029356830004",
  appId: "1:1029356830004:web:bb72ac1670ae2a62da3961",
  measurementId: "G-BRJDRQKMWG",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
