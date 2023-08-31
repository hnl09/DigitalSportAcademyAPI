import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBbng94kjwYNthqMHLo9CSZW4bGLUF6_l8",
    authDomain: "digital-sport-academy-ea5a5.firebaseapp.com",
    projectId: "digital-sport-academy-ea5a5",
    storageBucket: "digital-sport-academy-ea5a5.appspot.com",
    messagingSenderId: "255923649319",
    appId: "1:255923649319:web:7cad665ef66f0abbec4702"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };