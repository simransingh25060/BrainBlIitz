// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoU5oSjAjt0jXMUwOcAHAl4Oc0o0wXxeA",
  authDomain: "auth-161c9.firebaseapp.com",
  projectId: "auth-161c9",
  storageBucket: "auth-161c9.firebasestorage.app",
  messagingSenderId: "273578964568",
  appId: "1:273578964568:web:4e0ff604b488553e4afc2d",
  measurementId: "G-YJRS8TPHSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth=getAuth();
export const db=getFirestore(app);

export default app;