// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e0614.firebaseapp.com",
  projectId: "mern-estate-e0614",
  storageBucket: "mern-estate-e0614.appspot.com",
  messagingSenderId: "194447200934",
  appId: "1:194447200934:web:0877eb05c627b7c507da67",
  measurementId: "G-ZZKNCNSDM0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
