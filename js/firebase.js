// Firebase SDK imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUybSZlEqlyBtGAamKrAKqKPW4YOd9j7c",
    authDomain: "meteorology-academy.firebaseapp.com",
    projectId: "meteorology-academy",
    storageBucket: "meteorology-academy.firebasestorage.app",
    messagingSenderId: "196805463855",
    appId: "1:196805463855:web:ef12159b8b8e3b7af79bda",
    measurementId: "G-L3LBHRDTS4"
};

// Initialise Firebase
const app = initializeApp(firebaseConfig);

// Services
const auth = getAuth(app);
const db = getFirestore(app);

// Export them
export { auth, db };