// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcocrzrpQnpmywAVgn5ih7hUXnHZWri0c",
  authDomain: "trailtime-dc3e2.firebaseapp.com",
  projectId: "trailtime-dc3e2",
  storageBucket: "trailtime-dc3e2.firebasestorage.app",
  messagingSenderId: "100471855825",
  appId: "1:100471855825:web:443a505159084205e6c3f0",
  measurementId: "G-BRVZ55SGPY"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };