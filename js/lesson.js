import { db } from "./firebase.js";
import { LessonEngine } from "./lessonEngine.js";

import {
    doc,
    getDoc,
    collection,
    getDocs,
    query,
    orderBy
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const params = new URLSearchParams(window.location.search);

const lessonID = params.get("id") || "vrw";

//-------------------------------------
// Load lesson from Firestore
//-------------------------------------

async function loadLesson(lessonID) {

    // 1. Get the lesson document (metadata)
    const lessonRef = doc(db, "lessons", lessonID);
    const lessonSnap = await getDoc(lessonRef);

    if (!lessonSnap.exists()) {

        return null;

    }

    const metadata = lessonSnap.data();

    // 2. Get the cards subcollection, ordered by "order" field
    const cardsRef = collection(db, "lessons", lessonID, "cards");
    const cardsQuery = query(cardsRef, orderBy("order"));
    const cardsSnap = await getDocs(cardsQuery);

    const cards = cardsSnap.docs.map(cardDoc => cardDoc.data());

    return {
        metadata: metadata,
        cards: cards
    };

}

//-------------------------------------
// Initialise the lesson page
//-------------------------------------

loadLesson(lessonID).then(lesson => {

    if (!lesson) {

        console.error("Lesson not found.");

        const lessonTitle = document.getElementById("lessonTitle");

        if (lessonTitle) {

            lessonTitle.textContent = "Lesson not found";

        }

        return;

    }

    const engine = new LessonEngine(lesson);

    engine.initialise();

}).catch(error => {

    console.error("Error loading lesson:", error);

});
