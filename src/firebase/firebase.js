// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAONc-m1sh9nyZ51fJ3DVO20m1kyJ4CDJQ",
  authDomain: "snake-app-e77a2.firebaseapp.com",
  projectId: "snake-app-e77a2",
  storageBucket: "snake-app-e77a2.appspot.com",
  messagingSenderId: "809052944260",
  appId: "1:809052944260:web:a0deabb58dbdc0fbc04fd1"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };