// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: "todo-with-firebase-d9b45.firebaseapp.com",
  projectId: "todo-with-firebase-d9b45",
  storageBucket: "todo-with-firebase-d9b45.appspot.com",
  messagingSenderId: "182508413614",
  appId: "1:182508413614:web:213e9f93b16d3e33f8433f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)