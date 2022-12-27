import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; //* for Cloud Firestore

// Adicione aqui as suas credenciais do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAGzPAA-cySp5C_xYdkdNZEiJ3NuB8MwzA",
  authDomain: "chat--firebase-662ad.firebaseapp.com",
  projectId: "chat--firebase-662ad",
  storageBucket: "chat--firebase-662ad.appspot.com",
  messagingSenderId: "504224726320",
  appId: "1:504224726320:web:f554081115ca495bf79cf5"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);