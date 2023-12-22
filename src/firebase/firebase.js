import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBY-22QRs-cUqjMMFsRaimcM3RBfB7jhlM",
    authDomain: "aj-first.firebaseapp.com",
    projectId: "aj-first",
    storageBucket: "aj-first.appspot.com",
    messagingSenderId: "786935840564",
    appId: "1:786935840564:web:d91d81a2e9d6a771a62f61",
    measurementId: "G-55FYTWQ4F0"
  };
  
firebase.initializeApp(firebaseConfig)
let auth = firebase.auth();
export{auth}
