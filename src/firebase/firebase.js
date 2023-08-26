// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNO7Yru3GmPkydfC1cD5c4C5YHrwGuMBE",
  authDomain: "reddit-ce4f1.firebaseapp.com",
  projectId: "reddit-ce4f1",
  storageBucket: "reddit-ce4f1.appspot.com",
  messagingSenderId: "1082845604987",
  appId: "1:1082845604987:web:2e05d3fe7b303a93cdc6de",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const  db  = getFirestore(app);
