// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtKxjNa0f9QX06gtq2k_CrwOOM2XG8y_E",
  authDomain: "blogbase-fdccd.firebaseapp.com",
  projectId: "blogbase-fdccd",
  storageBucket: "blogbase-fdccd.appspot.com",
  messagingSenderId: "295327068848",
  appId: "1:295327068848:web:dd060538f4ddc36c8f4175",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
