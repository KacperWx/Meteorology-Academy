console.log("Lesson JS started");

import { lessons } from "./lessonData.js";
import { LessonEngine } from "./lessonEngine.js";

const params = new URLSearchParams(window.location.search);

const lessonID = params.get("id") || "vrw";

const lesson = lessons[lessonID];

if (!lesson) {

    console.error("Lesson not found.");

}
else {

    const engine = new LessonEngine(lesson);

    engine.initialise();

}
