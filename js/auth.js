import { auth, db } from "./firebase.js";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

import {
    doc,
    setDoc
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";


const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");


// ------------------------------
// LOGIN
// ------------------------------

if (loginForm) {

    loginForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        errorMessage.textContent = "";

        try {

            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            window.location.href = "dashboard.html";

        }

        catch (error) {

            errorMessage.textContent = error.message;

        }

    });

}



// ------------------------------
// REGISTER
// ------------------------------

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        errorMessage.textContent = "";

        try {

            const userCredential =
                await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );

            await setDoc(

                doc(db, "users", userCredential.user.uid),

                {

                    email: email,

                    created: new Date(),

                    completedLessons: [],

                    quizScores: {},

                    streak: 0,

                    mastery: {}

                }

            );

            window.location.href = "dashboard.html";

        }

        catch (error) {

            errorMessage.textContent = error.message;

        }

    });

}



// ------------------------------
// PASSWORD RESET
// ------------------------------

const resetButton =
    document.getElementById("resetPassword");

if (resetButton) {

    resetButton.addEventListener("click", async () => {

        const email =
            document.getElementById("email").value;

        if (!email) {

            errorMessage.textContent =
                "Please enter your email address first.";

            return;

        }

        try {

            await sendPasswordResetEmail(auth, email);

            errorMessage.style.color = "#6dff9b";

            errorMessage.textContent =
                "Password reset email sent.";

        }

        catch (error) {

            errorMessage.style.color = "#ff7d7d";

            errorMessage.textContent =
                error.message;

        }

    });

}



// ------------------------------
// AUTH STATE
// ------------------------------

onAuthStateChanged(auth, (user) => {

    if (user) {

        console.log("Logged in:", user.email);

    }

    else {

        console.log("Not logged in");

    }

});



// ------------------------------
// LOGOUT
// ------------------------------

window.logout = async function () {

    await signOut(auth);

    window.location.href = "login.html";

}