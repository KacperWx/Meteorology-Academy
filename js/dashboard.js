import { auth, db } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

onAuthStateChanged(auth, async (user) => {
    if (user) {
        document.getElementById("user-email-display").textContent = user.email;

        const userDocRef = doc(db, "users", user.uid);
        try {
            const docSnap = await getDoc(userDocRef);
            if (docSnap.exists()) {
                const userData = docSnap.data();
                const completedCount = userData.completedLessons?.length || 0;
                
                // Track dynamic dashboard text elements
                document.getElementById("streak-count").textContent = `${userData.streak || 1} Days`;
                document.getElementById("lessons-count").textContent = `${completedCount} Modules`;
                
                // Calculate real completion metrics (Total of 4 lessons in Tropical Meteorology)
                const tropicalProgressPercent = Math.round((completedCount / 4) * 100);
                updateProgressBar("tropical", tropicalProgressPercent);

                // Check quiz averages parameters safely
                const scores = Object.values(userData.quizScores || {});
                if (scores.length > 0) {
                    const average = scores.reduce((a, b) => a + b, 0) / scores.length;
                    document.getElementById("avg-score").textContent = `${Math.round(average)}%`;
                }
            }
        } catch (error) {
            console.error("Error managing dashboard metrics retrieval:", error);
        }
    } else {
        window.location.href = "login.html";
    }
});

function updateProgressBar(idPrefix, value) {
    const percentText = document.getElementById(`${idPrefix}-percent`);
    const fillBar = document.getElementById(`${idPrefix}-fill`);
    if (percentText) percentText.textContent = `${value}%`;
    if (fillBar) fillBar.style.width = `${value}%`;
}

// Global Sign Out binding interface hook functionality
window.logout = async function() {
    try {
        await signOut(auth);
        window.location.href = "login.html";
    } catch (error) {
        console.error("Logout execution fault encountered:", error);
    }
}