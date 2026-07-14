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
                    "The modern theory of vortex Rossby waves developed during the late 1990s to explain asymmetric disturbances within intense tropical cyclones. It has since become one of the key theoretical frameworks for understanding vortex dynamics.
                    
                    ",

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

    },



    "geostrophic-wind-quiz": {

        metadata: {

            id: "geostrophic-wind-quiz",

            title: "The Geostrophic Wind - Quiz",

            course: "Introductory Meteorology",

            module: "Atmospheric Dynamics",

            difficulty: "Beginner",

            estimatedMinutes: 15,

            version: "1.0",

            authors: [

                "Meteorology Academy"

            ],

            prerequisites: [

                "pressure-gradient-force",
                "coriolis-force"

            ],

            learningObjectives: [

                "Describe the balance of forces that defines the geostrophic wind.",

                "Identify where and why geostrophic balance breaks down.",

                "Explain the direction of the PGF and Coriolis force relative to height contours.",

                "Relate height contour spacing to wind speed."

            ]

        },



        cards: [

            {
                id: "geo-info-001",

                concept: "all",

                status: "published",

                type: "info",

                title: "Main information",

                text:
                    "The geostrophic wind is the wind flow that occurs in the middle latitudes aloft in the troposphere. The winds have a more difficult time obtaining geostrophic balance in the equatorial latitudes since the Coriolis force is weak. The geostrophic balance also does not occur at and near the surface since the force of friction is significant there and the geostrophic balance does not occur in a curved flow since a centrifugal force is introduced in that situation. What the geostrophic wind includes is a balance between the PGF (Pressure Gradient Force) and the Coriolis force. This flow results in the wind staying parallel to height contours. The PGF is the force resulting in the pressure difference between higher and lower pressure. The PGF points directly from high to low pressure (or heights). The Coriolis force results from the spin of the Earth and is directed to the right of the path of motion in the Northern Hemisphere.

The diagram below shows an example of geostrophic balance in the Northern Hemisphere. The wind flows with higher pressure (heights) to the right of the path of motion and lower pressure (heights) to the left of the path of motion. The PGF points from higher toward lower pressure (heights) and the Coriolis points to the right of the path of motion (which is equal in magnitude but in the opposite direction of the PGF in order to balance it). The height contour spacing determines the magnitude of the wind. Closer spacing results in stronger wind.
                    
                    ",

                estimatedMinutes: 10,

                masteryWeight: 3
            },

            {
                id: "geo-q-001",

                concept: "geostrophic-location",

                status: "published",

                type: "question",

                title: "Where the Geostrophic Wind Occurs",

                question:
                    "The geostrophic wind occurs primarily:",

                answers: [

                    {
                        text: "At the surface of the Earth",
                        correct: false
                    },

                    {
                        text: "In the middle latitudes aloft in the troposphere",
                        correct: true
                    },

                    {
                        text: "Only in curved flow patterns",
                        correct: false
                    },

                    {
                        text: "Exclusively in the equatorial latitudes",
                        correct: false
                    }

                ],

                explanation:
                    "The geostrophic wind is the wind flow that occurs in the middle latitudes aloft in the troposphere.",

                masteryWeight: 1
            },



            {
                id: "geo-q-002",

                concept: "equatorial-balance",

                status: "published",

                type: "question",

                title: "Balance Near the Equator",

                question:
                    "Why do winds have difficulty achieving geostrophic balance near the equator?",

                answers: [

                    {
                        text: "The PGF is too strong",
                        correct: false
                    },

                    {
                        text: "There is too much friction",
                        correct: false
                    },

                    {
                        text: "The Coriolis force is weak",
                        correct: true
                    },

                    {
                        text: "Height contours are too closely spaced",
                        correct: false
                    }

                ],

                explanation:
                    "The winds have a more difficult time obtaining geostrophic balance in the equatorial latitudes since the Coriolis force is weak there.",

                masteryWeight: 1
            },



            {
                id: "geo-q-003",

                concept: "surface-balance",

                status: "published",

                type: "question",

                title: "Balance Near the Surface",

                question:
                    "Why does geostrophic balance NOT occur at or near the surface?",

                answers: [

                    {
                        text: "The Coriolis force is too strong there",
                        correct: false
                    },

                    {
                        text: "The force of friction is significant there",
                        correct: true
                    },

                    {
                        text: "The PGF disappears near the surface",
                        correct: false
                    },

                    {
                        text: "There is no pressure gradient near the surface",
                        correct: false
                    }

                ],

                explanation:
                    "The geostrophic balance does not occur at and near the surface since the force of friction is significant there.",

                masteryWeight: 1
            },



            {
                id: "geo-q-004",

                concept: "curved-flow",

                status: "published",

                type: "question",

                title: "Balance in Curved Flow",

                question:
                    "Why does geostrophic balance not occur in curved flow?",

                answers: [

                    {
                        text: "The Coriolis force disappears in curved flow",
                        correct: false
                    },

                    {
                        text: "A centrifugal force is introduced",
                        correct: true
                    },

                    {
                        text: "The PGF becomes zero",
                        correct: false
                    },

                    {
                        text: "Friction increases in curved flow",
                        correct: false
                    }

                ],

                explanation:
                    "The geostrophic balance does not occur in a curved flow since a centrifugal force is introduced in that situation.",

                masteryWeight: 1
            },



            {
                id: "geo-q-005",

                concept: "force-balance",

                status: "published",

                type: "question",

                title: "The Two Balancing Forces",

                question:
                    "The geostrophic wind results from a balance between which two forces?",

                answers: [

                    {
                        text: "Friction and centrifugal force",
                        correct: false
                    },

                    {
                        text: "PGF and centrifugal force",
                        correct: false
                    },

                    {
                        text: "PGF and Coriolis force",
                        correct: true
                    },

                    {
                        text: "Coriolis force and friction",
                        correct: false
                    }

                ],

                explanation:
                    "What the geostrophic wind includes is a balance between the PGF (Pressure Gradient Force) and the Coriolis force.",

                masteryWeight: 2
            },



            {
                id: "geo-q-006",

                concept: "pgf-direction",

                status: "published",

                type: "question",

                title: "Direction of the PGF",

                question:
                    "In which direction does the PGF point?",

                answers: [

                    {
                        text: "From low pressure to high pressure",
                        correct: false
                    },

                    {
                        text: "Parallel to the height contours",
                        correct: false
                    },

                    {
                        text: "Directly from high pressure (heights) to low pressure (heights)",
                        correct: true
                    },

                    {
                        text: "To the right of the path of motion",
                        correct: false
                    }

                ],

                explanation:
                    "The PGF is the force resulting from the pressure difference between higher and lower pressure, and it points directly from high to low pressure (or heights).",

                masteryWeight: 1
            },



            {
                id: "geo-q-007",

                concept: "coriolis-direction",

                status: "published",

                type: "question",

                title: "Direction of the Coriolis Force",

                question:
                    "In the Northern Hemisphere, the Coriolis force is directed:",

                answers: [

                    {
                        text: "To the left of the path of motion",
                        correct: false
                    },

                    {
                        text: "To the right of the path of motion",
                        correct: true
                    },

                    {
                        text: "Directly opposite the PGF only at the equator",
                        correct: false
                    },

                    {
                        text: "Parallel to the height contours",
                        correct: false
                    }

                ],

                explanation:
                    "The Coriolis force results from the spin of the Earth and is directed to the right of the path of motion in the Northern Hemisphere.",

                masteryWeight: 1
            },



            {
                id: "geo-q-008",

                concept: "resulting-flow",

                status: "published",

                type: "question",

                title: "Resulting Wind Flow",

                question:
                    "Because the geostrophic wind is a balance of forces, the resulting wind flow is:",

                answers: [

                    {
                        text: "Perpendicular to the height contours",
                        correct: false
                    },

                    {
                        text: "Parallel to the height contours",
                        correct: true
                    },

                    {
                        text: "Directed from high to low pressure",
                        correct: false
                    },

                    {
                        text: "Directed from low to high pressure",
                        correct: false
                    }

                ],

                explanation:
                    "This flow results in the wind staying parallel to height contours.",

                masteryWeight: 2
            },



            {
                id: "geo-q-009",

                concept: "diagram-orientation",

                status: "published",

                type: "question",

                title: "Reading the Diagram",

                question:
                    "In the diagram, as one faces the direction of the resulting wind in the Northern Hemisphere, higher pressure (heights) is located:",

                answers: [

                    {
                        text: "To the left of the path of motion",
                        correct: false
                    },

                    {
                        text: "To the right of the path of motion",
                        correct: true
                    },

                    {
                        text: "Directly ahead of the path of motion",
                        correct: false
                    },

                    {
                        text: "Directly behind the path of motion",
                        correct: false
                    }

                ],

                explanation:
                    "The wind flows with higher pressure (heights) to the right of the path of motion and lower pressure (heights) to the left of the path of motion.",

                masteryWeight: 2
            },



            {
                id: "geo-q-010",

                concept: "wind-magnitude",

                status: "published",

                type: "question",

                title: "Wind Speed and Contour Spacing",

                question:
                    "What determines the magnitude (speed) of the geostrophic wind?",

                answers: [

                    {
                        text: "The strength of the Coriolis force alone",
                        correct: false
                    },

                    {
                        text: "The amount of surface friction",
                        correct: false
                    },

                    {
                        text: "The spacing of the height contours",
                        correct: true
                    },

                    {
                        text: "The latitude only",
                        correct: false
                    }

                ],

                explanation:
                    "The height contour spacing determines the magnitude of the wind. Closer spacing results in stronger wind.",

                masteryWeight: 1
            }

        ]

    }

};