import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyCZwjO2g2sCUnn3WjJ8NFWLO0kSAIHjtZw",
  authDomain: "usermanagement-9fc56.firebaseapp.com",
  databaseURL: "https://usermanagement-9fc56-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "usermanagement-9fc56",
  storageBucket: "usermanagement-9fc56.appspot.com",
  messagingSenderId: "674344107679",
  appId: "1:674344107679:web:2221772b8c1338957c6caa"
};

firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;