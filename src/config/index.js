import firebase from 'firebase/app'
import 'firebase/database'

firebase.initializeApp({
  apiKey: "AIzaSyD74P_TZA3orgQf_5rBjxBxqj50lVXpFiY",
  authDomain: "listprothese.firebaseapp.com",
  projectId: "listprothese",
  storageBucket: "listprothese.appspot.com",
  messagingSenderId: "1053818763050",
  appId: "1:1053818763050:web:b55e5550fc2c4c37079053"
});

const FIREBASE = firebase;

export default FIREBASE;