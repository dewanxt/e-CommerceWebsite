// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfX3oz653j2IoSOwJovJ4F5PV4T38xS9k",
  authDomain: "dewanxt-a1a82.firebaseapp.com",
  databaseURL: "https://dewanxt-a1a82-default-rtdb.firebaseio.com",
  projectId: "dewanxt-a1a82",
  storageBucket: "dewanxt-a1a82.firebasestorage.app",
  messagingSenderId: "824074335742",
  appId: "1:824074335742:web:2b6db17ffbe527d8287caf",
  measurementId: "G-NQWRPQN1W0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig