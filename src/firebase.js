// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ0uDDz0MC4WODp6QSJMt6XQlBDDhy3Zk",
  authDomain: "majoringcourses.firebaseapp.com",
  projectId: "majoringcourses",
  storageBucket: "majoringcourses.appspot.com",
  messagingSenderId: "747873407194",
  appId: "1:747873407194:web:b6b3c09ebf0f60dea6d5e3",
  measurementId: "G-2ERQXZJKNT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();