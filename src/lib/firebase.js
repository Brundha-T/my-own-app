// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIZBFF2EPJ31fhdadMhg_MiDSPrxivKEk",
  authDomain: "ratemyroutine.firebaseapp.com",
  projectId: "ratemyroutine",
  storageBucket: "ratemyroutine.firebasestorage.app",
  messagingSenderId: "791603545525",
  appId: "1:791603545525:web:87ec6e60fcccf4919b85fc",
  measurementId: "G-NQVVNKRV1H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);