import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// Only import analytics if running in browser
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAIZBFF2EPJ31fhdadMhg_MiDSPrxivKEk",
  authDomain: "http://ratemyroutine.firebaseapp.com",
  projectId: "ratemyroutine",
  storageBucket: "http://ratemyroutine.firebasestorage.app",
  messagingSenderId: "791603545525",
  appId: "1:791603545525:web:87ec6e60fcccf4919b85fc",
  measurementId: "G-NQVVNKRV1H", // Only if you're using analytics
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Safe analytics initialization
let analytics = null;
if (typeof window !== 'undefined') {
  isSupported().then((yes) => {
    if (yes) {
      analytics = getAnalytics(app);
    }
  });
}

export { db };
