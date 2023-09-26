// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqi-87qDqT1c8Aw3FbSX7_QhF-25chHw4",
  authDomain: "expense-tracker-da6dc.firebaseapp.com",
  projectId: "expense-tracker-da6dc",
  storageBucket: "expense-tracker-da6dc.appspot.com",
  messagingSenderId: "806574353788",
  appId: "1:806574353788:web:05e6b5e2c73464493948f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
