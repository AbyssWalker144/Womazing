import firebase from "firebase/compat/app";

// два импорта чтобы все работало)
import 'firebase/compat/auth';
import 'firebase/compat/database';


const firebaseConfig = {
    apiKey: "AIzaSyCZb-FjIF976H7tJLPWWOqpxxr2b2SDdIY",
    authDomain: "online-store-6c305.firebaseapp.com",
    databaseURL: "https://online-store-6c305-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "online-store-6c305",
    storageBucket: "online-store-6c305.appspot.com",
    messagingSenderId: "478885683461",
    appId: "1:478885683461:web:0394be527cbf6d0edf976c",
};

firebase.initializeApp(firebaseConfig);

export default firebase