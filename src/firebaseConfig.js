// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzociA1ObMN-KmBzudCUdTEeuiUc2M70o",
  authDomain: "vtirocketauth.firebaseapp.com",
  projectId: "vtirocketauth",
  storageBucket: "vtirocketauth.appspot.com",
  messagingSenderId: "402575620271",
  appId: "1:402575620271:web:455b28739d5d941b6e3c5a",
  measurementId: "G-YHQPNR6G5B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);


// Initialize Firebase Authentication and get a reference to the service
export const database = getAuth(app);
