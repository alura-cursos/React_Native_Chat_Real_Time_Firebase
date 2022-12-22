import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; //* for Cloud Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNVksmKb_ZrWnKR7ascAYrLRcrEcNmhnk",
  authDomain: "chat-firebase-f2dd0.firebaseapp.com",
  projectId: "chat-firebase-f2dd0",
  storageBucket: "chat-firebase-f2dd0.appspot.com",
  messagingSenderId: "1019198469348",
  appId: "1:1019198469348:web:8c0b5b0fca95f5615268f1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);