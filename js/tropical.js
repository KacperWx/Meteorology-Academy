import { auth, db } from "./firebase.js"; // Adjust path if inside a subfolder
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { doc, getDoc, updateDoc, arrayUnion } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const TOTAL_LESSONS = 4;
let currentUser = null;

// Track active authentication state
onAuthStateChanged(auth, async (user) => {
    if (user) {
        currentUser = user;
        console.log("Logged in:", user.email);
        // Fetch existing user progress from Firestore
        await loadUserProgress();
    } else {
        console.log("No user logged in. Progress tracking disabled.");
        // Optional: redirect to login if page is restricted
    }
});

// Load progress from Firestore and update UI
async function loadUserProgress() {
    if (!currentUser) return;

    const userDocRef = doc(db, "users", currentUser.uid);
    try {
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            const completed = data.completedLessons || [];
            
            updateProgressUI(completed);
        }
    } catch (error) {
        console.error("Error loading progress:", error);
    }
}

// Update DOM elements for progress bar and buttons
function updateProgressUI(completedList) {
    const completedCount = completedList.length;
    const percentage = (completedCount / TOTAL_LESSONS) * 180; // Assuming 180px or % calculation based on your CSS layout

    // Update progress bar width and text layout
    const fillElement = document.getElementById("progress-fill");
    const textElement = document.getElementById("progress-text");
    
    if (fillElement) fillElement.style.width = `${(completedCount / TOTAL_LESSONS) * 100}%`;
    if (textElement) textElement.textContent = `${completedCount}/${TOTAL_LESSONS} Lessons Completed`;

    // Visual feedback: Disable buttons for lessons already finished
    document.querySelectorAll(".complete-btn").forEach(button => {
        const lessonId = button.getAttribute("data-lesson-id");
        if (completedList.includes(lessonId)) {
            button.textContent = "Completed ✓";
            button.style.background = "#57e389"; // matching your --success token
            button.disabled = true;
        }
    });
}

// Event Listeners for completion action buttons
document.querySelectorAll(".complete-btn").forEach(button => {
    button.addEventListener("click", async (e) => {
        if (!currentUser) {
            alert("Please log in to save your learning progress!");
            return;
        }

        const lessonId = e.target.getAttribute("data-lesson-id");
        const userDocRef = doc(db, "users", currentUser.uid);

        try {
            // Use arrayUnion to append new item securely without overwriting existing data fields
            await updateDoc(userDocRef, {
                completedLessons: arrayUnion(lessonId)
            });
            
            // Reload updated timeline information onto page layout framework
            await loadUserProgress();
        } catch (error) {
            console.error("Error saving completed module data packet:", error);
        }
    });
});