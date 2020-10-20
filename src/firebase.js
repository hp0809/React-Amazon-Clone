import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7dJW7EGGQ6001FbfYDx7lqv5By6cmXn0",
  authDomain: "clone-c02a7.firebaseapp.com",
  databaseURL: "https://clone-c02a7.firebaseio.com",
  projectId: "clone-c02a7",
  storageBucket: "clone-c02a7.appspot.com",
  messagingSenderId: "261376858096",
  appId: "1:261376858096:web:dac5d42a47ca65d7ac2f35",
  measurementId: "G-7SS3PR3RWN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};