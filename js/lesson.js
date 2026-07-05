import { lessons } from "./lessonData.js";
import { LessonEngine } from "./lessonEngine.js";

const params = new URLSearchParams(window.location.search);

const lessonID = params.get("id") || "vrw";

const lesson = lessons[lessonID];

if (!lesson) {

    alert("Lesson not found.");

    throw new Error("Lesson not found.");

}

const engine = new LessonEngine(lesson);

engine.initialise();