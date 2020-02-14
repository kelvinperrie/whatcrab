var filterData = [
    {
        key : "carapaceShape",
        possibleValues : [
            { key : "triangle", text : "Triangle", image: "images/shape-triangle.png" },
            { key : "square", text : "Square", image: "images/shape-square.png" },
            { key : "round", text : "Round", image: "images/shape-round.png" },
            { key : "oval", text : "Oval", image: "images/shape-oval.png" }
        ],
        question : "What's the shape of the crab's shell?",
        helpText: "Looking down on the crab from above, what is the main shape of the shell. For some crabs it can be hard to distinguish so you can select multiple options."
    },
    {
        key : "covering",
        possibleValues : [
            { key : "setae", text : "Setae/hairs" },
            { key : "seaweed", text : "Seaweed" }
        ],
        question : "Is the crab covered in something?",
        helpText : "Some crabs have a covering of seaweed which gives them camouflage, some have either long or short hairs which gives them a furry appearance underwater, or a muddy appearance when out of water. If the crab is dead the covering may no longer exist."
    },
    {
        key : "surfaceTexture",
        possibleValues : [
            { key : "spikey", text : "Spikey" }
        ],
        quesiton : "Does the top of the shell feel/look spikey?",
        helpText : "THIS ONE NEED TO CHANGE TO INCLUDE OTHER TEXTURES PLEASE"
    },
    {
        key : "lastLegsArePaddles",
        possibleValues : [
            { key : "true", text : "Back legs are paddles", image: "images/paddles.png" }
        ],
        question : "Are the back legs paddles?",
        helpText : "Some crabs have paddles on their back set of legs which they use to swim."
    },
    {
        key : "toothOnMargin",
        possibleValues : [
            { key : "true", text : "Has tooth on edge of shell", image: "images/tooth-on-margin-true.png" },
            { key : "false", text : "No tooth on edge of shell", image: "images/tooth-on-margin-false.png" }
        ],
        visibleWhen : [{ key : "carapaceShape", value : "round" }],
        question : "Is their a single tooth (or spike) on each side of the shell?",
        showHelpText : true,
        helpText : "Some of the smaller round shelled crabs have a single tooth/spike on each side of their shell which can be help to narrow down the type of crab."
    },
    {
        key : "posteriorSpines",
        possibleValues : [
            { key : "true", text : "Two posterior spines", image: "images/two-posterior-spines.png" },
            { key : "false", text : "No posterior", image: "images/no-posterior-spines.png" }
        ],
        visibleWhen : { key : "carapaceShape", value : "triangle" },
        question : "Are there two spines/spikes on the back of the shell?",
        showHelpText : true,
        helpText : "Some Camouflage crabs (crabs that are covered in seaweed) have two posterior spines/spikes on the back of their shell facing backwards."
    },
]