import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const app = initializeApp({
    apiKey: "AIzaSyB_DQKYgdq90qGugWRaB-QyOWC75JswAnM",
    authDomain: "rit-parking.firebaseapp.com",
    projectId: "rit-parking",
    storageBucket: "rit-parking.appspot.com",
    messagingSenderId: "837629152254",
    appId: "1:837629152254:web:f37963a3f7d0990a9eceaf",
    measurementId: "G-VP355PQC9L"
});

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const firestore = getFirestore(app);