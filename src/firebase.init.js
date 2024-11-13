// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7j8ek7vGU_ZfbIpdo8C9N8WRlxwwVc_M",
  authDomain: "project-sm-105e9.firebaseapp.com",
  projectId: "project-sm-105e9",
  storageBucket: "project-sm-105e9.firebasestorage.app",
  messagingSenderId: "883214006684",
  appId: "1:883214006684:web:32113e4d5be79ed5863059",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
