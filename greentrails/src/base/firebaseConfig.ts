// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCYnKPhe_pdv1whbZ64x7Hu3_lHdht0E6Q",
  authDomain: "greentrails-d6c2d.firebaseapp.com",
  projectId: "greentrails-d6c2d",
  storageBucket: "greentrails-d6c2d.firebasestorage.app",
  messagingSenderId: "67873180558",
  appId: "1:67873180558:web:d65d95fb94c483683db2df",
  measurementId: "G-9K66S1W7XM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);



export { db };
