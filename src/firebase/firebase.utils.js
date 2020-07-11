import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBogRNYOT9raoGfE5IeHRMhqdIak4xFgY8",
    authDomain: "art-app-4b950.firebaseapp.com",
    databaseURL: "https://art-app-4b950.firebaseio.com",
    projectId: "art-app-4b950",
    storageBucket: "art-app-4b950.appspot.com",
    messagingSenderId: "309433496963",
    appId: "1:309433496963:web:315e0670c7e798e41032b6",
    measurementId: "G-236FJLC73Q"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
