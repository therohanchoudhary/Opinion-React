import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD9ZqgaeuHt0ihOIzH1DFImjBYCaWqfjzU",
    authDomain: "twitter-9f525.firebaseapp.com",
    projectId: "twitter-9f525",
    storageBucket: "twitter-9f525.appspot.com",
    messagingSenderId: "266894998908",
    appId: "1:266894998908:web:cd25ba18676a0703f678f9",
    measurementId: "G-YPQFV8D9XQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;

