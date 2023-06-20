import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCJLDDlmPBH4KLwznJv7TZOHlipNVRNKSI",
    authDomain: "netflix-clone-5d9bc.firebaseapp.com",
    projectId: "netflix-clone-5d9bc",
    storageBucket: "netflix-clone-5d9bc.appspot.com",
    messagingSenderId: "794399866620",
    appId: "1:794399866620:web:f6e8f9ed1fec592feda179"
  };

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export { auth };
export default db;