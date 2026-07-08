/*
=========================================================
Meteorology Academy
Lesson Database
Version 1.0
=========================================================
*/

export const lessons = {

    vrw: {

        metadata: {

            id: "vrw",

            title: "Vortex Rossby Wave Theory and Literature",

            course: "Tropical Meteorology",

            module: "Tropical Cyclone Dynamics",

            difficulty: "Advanced",

            estimatedMinutes: 45,

            version: "1.0",

            authors: [

                "Meteorology Academy"

            ],

            prerequisites: [

                "potential-vorticity",
                "gradient-wind-balance"

            ],

            learningObjectives: [

                "Explain the physical basis of vortex Rossby waves.",

                "Describe how radial PV gradients support wave propagation.",

                "Explain axisymmetrization.",

                "Interpret the scientific literature on vortex Rossby waves."

            ]

        },



        cards: [

            {
                id: "vrw-001",

                concept: "welcome",

                status: "published",

                type: "introduction",

                title: "Welcome",

                text:
                    "Welcome to the first advanced lesson in Tropical Cyclone Dynamics. Throughout this lesson we will develop a theoretical understanding of vortex Rossby waves and their role in tropical cyclone structure.",

                estimatedMinutes: 2,

                masteryWeight: 1
            },



            {
                id: "vrw-002",

                concept: "history",

                status: "published",

                type: "info",

                title: "Historical Background",

                text:
                    "The modern theory of vortex Rossby waves developed during the late 1990s to explain asymmetric disturbances within intense tropical cyclones. It has since become one of the key theoretical frameworks for understanding vortex dynamics.",

                estimatedMinutes: 3,

                masteryWeight: 1
            },



            {
                id: "vrw-003",

                concept: "definition",

                status: "published",

                type: "definition",

                title: "Definition",

                text:
                    "A vortex Rossby wave is a wave that propagates within a rotating vortex because of radial gradients of potential vorticity.",

                estimatedMinutes: 4,

                masteryWeight: 2
            },



            {
                id: "vrw-004",

                concept: "knowledge-check",

                status: "published",

                type: "question",

                title: "Knowledge Check",

                question:
                    "Which quantity provides the restoring mechanism for vortex Rossby waves?",

                answers: [

                    {
                        text: "Earth's planetary beta effect",
                        correct: false
                    },

                    {
                        text: "Radial gradient of potential vorticity",
                        correct: true
                    },

                    {
                        text: "Latent heat release",
                        correct: false
                    },

                    {
                        text: "Surface friction",
                        correct: false
                    }

                ],

                explanation:
                    "Unlike planetary Rossby waves, vortex Rossby waves are supported primarily by the radial gradient of potential vorticity within the vortex.",

                masteryWeight: 3
            },



            {
                id: "vrw-005",

                concept: "equation",

                status: "published",

                type: "equation",

                title: "Potential Vorticity",

                text:
                    "Potential vorticity is the key conserved quantity underpinning vortex Rossby wave dynamics.",

                equation:

                    "(ζ + f) / h",

                masteryWeight: 2
            },



            {
                id: "vrw-006",

                concept: "summary",

                status: "published",

                type: "info",

                title: "Lesson Summary",

                text:
                    "You have completed the introduction to vortex Rossby wave theory. Later sections will examine propagation, wave-mean flow interaction, axisymmetrization and tropical cyclone intensification."

            }

        ]

    }

};