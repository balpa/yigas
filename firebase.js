// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_API_KEY}`,
  authDomain: "yigasweb.firebaseapp.com",
  projectId: "yigasweb",
  storageBucket: "yigasweb.appspot.com",
  messagingSenderId: "34267813175",
  appId: `${import.meta.env.VITE_APP_ID}`
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);