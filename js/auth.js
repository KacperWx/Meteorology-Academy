import { auth, db } from "./firebase.js";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    onAuthStateChanged,
    signOut,
    updateProfile
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

import {
    doc,
    setDoc,
    serverTimestamp
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

        const displayName =
            document.getElementById("displayName").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        const errorMessage =
            document.getElementById("errorMessage");

        errorMessage.style.color = "#ff7d7d";
        errorMessage.textContent = "";

        if (password !== confirmPassword) {

            errorMessage.textContent =
                "Passwords do not match.";

            return;

        }

        try {

            const userCredential =
                await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );

            const user = userCredential.user;

            await updateProfile(user, {

                displayName: displayName

            });

            await setDoc(

                doc(db, "users", user.uid),

                {

                    displayName: displayName,

                    email: email,

                    createdAt: serverTimestamp(),

                    progress: {

                        completedLessons: [],

                        quizScores: {},

                        currentCourse: "tropical-meteorology",

                        overallProgress: 0

                    },

                    statistics: {

                        streak: 0,

                        lessonsCompleted: 0,

                        quizzesCompleted: 0

                    },

                    preferences: {

                        theme: "dark"

                    }

                }

            );

            window.location.href = "dashboard.html";

        }

        catch (error) {

            errorMessage.textContent =
                getFirebaseErrorMessage(error.code);

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
