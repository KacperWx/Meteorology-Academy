/*
=========================================================
Meteorology Academy
Lesson Engine
Version 1.0
=========================================================
*/

export class LessonEngine {

    constructor(lesson) {

        this.lesson = lesson;

        this.currentCard = 0;

        this.lessonTitle =
            document.getElementById("lessonTitle");

        this.lessonProgress =
            document.getElementById("lessonProgress");

        this.sectionList =
            document.getElementById("sectionList");

        this.cardTitle =
            document.getElementById("cardTitle");

        this.cardContent =
            document.getElementById("cardContent");

        this.cardMedia =
            document.getElementById("cardMedia");

        this.previousButton =
            document.getElementById("previousButton");

        this.nextButton =
            document.getElementById("nextButton");

    }

    //-------------------------------------
    // Initialise
    //-------------------------------------

    initialise() {

        this.lessonTitle.textContent =
            this.lesson.metadata.title;

        this.buildSidebar();

        this.attachEvents();

        this.renderCard();

    }

    //-------------------------------------
    // Sidebar
    //-------------------------------------

    buildSidebar() {

        this.sectionList.innerHTML = "";

        this.lesson.cards.forEach((card, index) => {

            const button =
                document.createElement("button");

            button.className =
                "sidebar-item";

            button.textContent =
                card.title;

            button.onclick = () => {

                this.currentCard = index;

                this.renderCard();

            };

            this.sectionList.appendChild(button);

        });

    }

    //-------------------------------------
    // Navigation
    //-------------------------------------

    attachEvents() {

        this.nextButton.onclick = () => {

            if (

                this.currentCard <
                this.lesson.cards.length - 1

            ) {

                this.currentCard++;

                this.renderCard();

            }

        };

        this.previousButton.onclick = () => {

            if (this.currentCard > 0) {

                this.currentCard--;

                this.renderCard();

            }

        };

    }

    //-------------------------------------
    // Progress
    //-------------------------------------

    updateProgress() {

        const percent = Math.round(

            ((this.currentCard + 1)
            / this.lesson.cards.length)
            * 100

        );

        this.lessonProgress.textContent =
            percent + "%";

    }

    //-------------------------------------
    // Render Card
    //-------------------------------------

    renderCard() {

        const card =
            this.lesson.cards[this.currentCard];

        this.cardTitle.textContent =
            card.title;

        this.cardContent.innerHTML = "";

        this.cardMedia.innerHTML = "";

        //---------------------------------
        // Introduction
        //---------------------------------

        if (

            card.type === "introduction" ||

            card.type === "info" ||

            card.type === "definition"

        ) {

            this.cardContent.innerHTML = `

                <p>${card.text}</p>

            `;

        }

        //---------------------------------
        // Equation
        //---------------------------------

        if (card.type === "equation") {

            this.cardContent.innerHTML = `

                <p>${card.text}</p>

                <div class="equation">

                    ${card.equation}

                </div>

            `;

        }

        //---------------------------------
        // Literature
        //---------------------------------

        if (card.type === "literature") {

            const table =
                document.createElement("table");

            table.className =
                "literature-table";

            table.innerHTML =

            `
            <tr>

                <th>Year</th>

                <th>Authors</th>

                <th>Contribution</th>

            </tr>
            `;

            card.literature.forEach(paper => {

                table.innerHTML +=

                `
                <tr>

                    <td>${paper.year}</td>

                    <td>${paper.authors}</td>

                    <td>${paper.importance}</td>

                </tr>
                `;

            });

            this.cardContent.appendChild(table);

        }

        //---------------------------------
        // Question
        //---------------------------------

        if (card.type === "question") {

            this.renderQuestion(card);

        }

        //---------------------------------
        // Image
        //---------------------------------

        if (card.image) {

            this.cardMedia.innerHTML =

            `
            <img
                src="${card.image}"
                alt="${card.title}"
            >
            `;

        }

        this.updateProgress();

        this.updateSidebar();

    }

    //-------------------------------------
    // Question Renderer
    //-------------------------------------

    renderQuestion(card) {

        const question =
            document.createElement("div");

        question.className =

            "question";

        question.innerHTML =

        `<h3>${card.question}</h3>`;

        card.answers.forEach(answer => {

            const button =
                document.createElement("button");

            button.className =
                "answer-button";

            button.textContent =
                answer.text;

            button.onclick = () => {

                document

                .querySelectorAll(".answer-button")

                .forEach(btn =>

                    btn.disabled = true

                );

                if (answer.correct) {

                    button.classList.add("correct");

                }

                else {

                    button.classList.add("incorrect");

                }

                const explanation =
                    document.createElement("div");

                explanation.className =
                    "answer-explanation";

                explanation.innerHTML =

                    card.explanation;

                question.appendChild(explanation);

            };

            question.appendChild(button);

        });

        this.cardContent.appendChild(question);

    }

    //-------------------------------------
    // Sidebar Highlight
    //-------------------------------------

    updateSidebar() {

        const buttons =

            document.querySelectorAll(".sidebar-item");

        buttons.forEach(

            button =>

            button.classList.remove("active")

        );

        buttons[this.currentCard]

            .classList.add("active");

    }

}