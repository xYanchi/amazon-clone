import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB0O8fjMOrwhiOGlpOsQE4u9fb9S2VUOww",
    authDomain: "clone-7310d.firebaseapp.com",
    databaseURL: "https://clone-7310d.firebaseio.com",
    projectId: "clone-7310d",
    storageBucket: "clone-7310d.appspot.com",
    messagingSenderId: "716275518084",
    appId: "1:716275518084:web:deb0ff1ae9aa4b275390d1",
    measurementId: "G-DKEKYCN9RM"
};
//Starts the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

//Database
const db = firebaseApp.firestore();
//Authentication
const auth = firebase.auth();

//For use outside of file
export { db, auth };