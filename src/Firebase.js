// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFRjukdeEEabUWob0g1dG4yYfVsgPAFOU",
  authDomain: "chat-app-e8ddb.firebaseapp.com",
  projectId: "chat-app-e8ddb",
  storageBucket: "chat-app-e8ddb.appspot.com",
  messagingSenderId: "889794572555",
  appId: "1:889794572555:web:f52c6ba047807e4a99320e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();