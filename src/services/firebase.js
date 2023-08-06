// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADcntFXscAKJ_OS-P9w9VCBwaOaSLeHCU",
  authDomain: "choipf-2023.firebaseapp.com",
  projectId: "choipf-2023",
  storageBucket: "choipf-2023.appspot.com",
  messagingSenderId: "230934162404",
  appId: "1:230934162404:web:fccc87eee1552cc26c35f1",
  measurementId: "G-70R3PHYGSW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
