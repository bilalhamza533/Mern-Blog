// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-a8d01.firebaseapp.com",
  projectId: "mern-blog-a8d01",
  storageBucket: "mern-blog-a8d01.appspot.com",
  messagingSenderId: "203440677428",
  appId: "1:203440677428:web:e95b12ae4c0360caa3a061"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
