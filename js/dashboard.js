import { auth, db } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

// Listen into user auth instance state established within auth.js
onAuthStateChanged(auth, async (user) => {
    if (user) {
        // 1. Populate visual profile banner values
        document.getElementById("user-email-display").textContent = user.email;

        // 2. Safely read from Firestore using the schema schema initiated during user sign-up
        const userDocRef = doc(db, "users", user.uid);
        try {
            const docSnap = await getDoc(userDocRef);
            if (docSnap.exists()) {
                const userData = docSnap.data();
                
                // Update basic telemetry markers
                document.getElementById("streak-count").textContent = `${userData.streak || 0} Days`;
                document.getElementById("lessons-count").textContent = `${userData.completedLessons?.length || 0} Modules`;
                
                // Map out potential Quiz Averages safely
                const scores = Object.values(userData.quizScores || {});
                if (scores.length > 0) {
                    const average = scores.reduce((a, b) => a + b, 0) / scores.length;
                    document.getElementById("avg-score").textContent = `${Math.round(average)}%`;
                }

                // Inject mock calculation weights to dynamic UI indicators for prototype showcase
                updateProgressBar("tropical", userData.completedLessons?.length ? 40 : 0);
                updateProgressBar("cyclo", userData.quizScores && Object.keys(userData.quizScores).length ? 75 : 0);
            }
        } catch (error) {
            console.error("Error collecting telemetry matrix parameters:", error);
        }
    } else {
        // Secure context guard rail routing unauthenticated attempts back to gate
        window.location.href = "login.html";
    }
});

function updateProgressBar(idPrefix, value) {
    document.getElementById(`${idPrefix}-percent`).textContent = `${value}%`;
    document.getElementById(`${idPrefix}-fill`).style.width = `${value}%`;
}

// 4. Live Atmospheric Sensory Feed Mock Automation Loop
function spinTelemetryFeed() {
    const basePressure = 1011 + Math.random() * 5;
    const baseCape = 1100 + Math.floor(Math.random() * 350);
    
    const pressEl = document.getElementById("live-pressure");
    const capeEl = document.getElementById("live-cape");

    if (pressEl && capeEl) {
        pressEl.textContent = `${basePressure.toFixed(1)} hPa`;
        capeEl.textContent = `${baseCape} J/kg`;
    }
}
setInterval(spinTelemetryFeed, 4000);