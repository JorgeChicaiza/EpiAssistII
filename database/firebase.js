
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG3W6zKL2bD_ZMFSkuocCO6nIoHXWZ7Po",
  authDomain: "react-native-firebase-5bf71.firebaseapp.com",
  projectId: "react-native-firebase-5bf71",
  storageBucket: "react-native-firebase-5bf71.appspot.com",
  messagingSenderId: "853353923957",
  appId: "1:853353923957:web:14278a0af793137265bf3c",
  measurementId: "G-5PBGCVHPL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db=getFirestore(app);
export default db;