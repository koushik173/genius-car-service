// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiTARWkTf6rhbSaLud3F5Ze6jX5u2bAwc",
  authDomain: "ginious-car-service-61731.firebaseapp.com",
  projectId: "ginious-car-service-61731",
  storageBucket: "ginious-car-service-61731.appspot.com",
  messagingSenderId: "793489537426",
  appId: "1:793489537426:web:743dca6b826d5a94c9694b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;