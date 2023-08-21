import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_API_KEY}`,
  authDomain: "yigasweb.firebaseapp.com",
  projectId: "yigasweb",
  storageBucket: "yigasweb.appspot.com",
  messagingSenderId: "34267813175",
  appId: `${import.meta.env.VITE_APP_ID}`
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);