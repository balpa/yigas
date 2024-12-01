import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: `${secrets.VITE_API_KEY}`,
  authDomain: "yigasweb.firebaseapp.com",
  projectId: "yigasweb",
  storageBucket: "yigasweb.appspot.com",
  messagingSenderId: "34267813175",
  appId: `${secrets.VITE_APP_ID}`
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);