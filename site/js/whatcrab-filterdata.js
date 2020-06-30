var filterData = [
    {
        key : "carapaceShape",
        possibleValues : [
            { key : "triangle", text : "Triangle", image: "images/shape-triangle.png" },
            { key : "square", text : "Square", image: "images/shape-square.png" },
            { key : "round", text : "Round", image: "images/shape-round.png" },
            { key : "oval", text : "Oval", image: "images/shape-oval.png" },
            { key : "other", text : "Other", image: "images/shape-other.png" }
        ],
        question : "What's the shape of the crab's shell?",
        helpText: "Looking down on the crab from above, what is the main shape of the shell. For some crabs it can be hard to distinguish so you can select multiple options."
    },
    // {
    //     key : "covering",
    //     possibleValues : [
    //         { key : "setae", text : "Setae/hairs" },
    //         { key : "seaweed", text : "Seaweed" }
    //     ],
    //     question : "Is the crab covered in something?",
    //     helpText : "Some crabs have a covering of seaweed which gives them camouflage, some have either long or short hairs which gives them a furry appearance underwater, or a muddy appearance when out of water. If the crab is dead the covering may no longer exist."
    // },
    {
        key : "lastLegsArePaddles",
        possibleValues : [
            { key : "true", text : "Back legs are paddles", image: "images/paddles.png" },
            { key : "false", text : "Back legs NOT paddles", image: "images/shape-oval.png" }
        ],
        visibleWhen : [{ key : "carapaceShape", value : "square" }, { key : "carapaceShape", value : "oval", or: "true" }],
        question : "Are the back legs paddles?",
        helpText : "Some crabs have paddles on their back set of legs which they use to swim. The ends of crab legs usually end in a point, but these paddles are a flag oval."
    },
    {
        key : "camouflageCrab",
        possibleValues : [
            { key : "true", text : "It IS a camouflage crab", image: "" },
            { key : "false", text : "Is NOT a camouflage crab", image: "" }
        ],
        visibleWhen : { key : "carapaceShape", value : "triangle" },
        question : "Is it is a camouflage crab covered in seaweed?",
        showHelpText : true,
        helpText : "For triangle shaped crabs, some of them are densely covered in seaweed when alive which allows them to camouflage themselves and hide. When dead these crab shells may be bare of seaweed but feel spikey where seaweed can be attached."
    },
    {
        key : "posteriorSpines",
        possibleValues : [
            { key : "true", text : "Two posterior spines", image: "images/posterior-spines.png" },
            { key : "false", text : "No posterior spines", image: "images/shape-triangle.png" }
        ],
        visibleWhen : { key : "camouflageCrab", value : "true" },
        question : "Are there two spines/spikes on the back of the camouflage crab's shell?",
        showHelpText : true,
        helpText : "Some Camouflage crabs (crabs that are covered in seaweed) have two posterior spines/spikes on the back of their shell facing backwards."
    },
    {
        key : "halfCrab",
        possibleValues : [
            { key : "true", text : "It IS a half crab", image: "images/halfcrab.png" },
            { key : "false", text : "Is NOT a half crab", image: "images/shape-round.png" }
        ],
        visibleWhen : [{ key : "carapaceShape", value : "triangle" },{ key : "carapaceShape", value : "round", or : "true" }],
        question : "Is it a half-crab with only 6 walking legs?",
        showHelpText : true,
        helpText : "Half-crabs are small and flat and only have six walking legs; other crabs have eight walking legs. Crabs in the wild can be missing legs due to preditor attack."
    },
    {
        key : "pillboxCrab",
        possibleValues : [
            { key : "true", text : "IS a pillbox crab", image: "images/pillbox-crab-true.png" },
            { key : "false", text : "Is NOT a pillbox crab", image: "" }
        ],
        visibleWhen : [{ key : "carapaceShape", value : "round" }],
        question : "Is this a pillbox crab?",
        showHelpText : true,
        helpText : "Pillbox crabs are small, round, FLAT crabs, slightly pointed at the front between the eyes, with long thin legs. Almost like a coin with spider legs. They are not spherical shaped (like a pea)."
    },  
    {
        key : "toothOnMargin",
        possibleValues : [
            { key : "true", text : "Single tooth on edge of shell", image: "images/tooth-on-margin-true.png" },
            { key : "false", text : "No tooth on edge of shell", image: "images/tooth-on-margin-false.png" }
        ],
        visibleWhen : [{ key : "pillboxCrab", value : "true" }],
        question : "Is their a single tooth (or spike) on each side of the shell?",
        showHelpText : true,
        helpText : "Some of the smaller round shelled crabs have a single tooth/spike on each side of their shell which can help to narrow down the type of crab."
    }, 
    {
        key : "sideNotches",
        possibleValues : [
            { key : "true", text : "The shell has notches", image: "images/square-side-notches-true.png" },
            { key : "false", text : "No notches", image: "images/square-side-notches-false.png" }
        ],
        visibleWhen : [{ key : "carapaceShape", value : "square" }],
        question : "For square shaped crabs, are their notches/spikes on the side of the shell just behind the eyes?",
        showHelpText : true,
        helpText : "Some crabs have notches on the sides of their shells. Sometimes they can be very small, some times they are more obvious. These can also be described as spikes or teeth."
    },  
    {
        key : "rectangleShaped",
        possibleValues : [
            { key : "true", text : "Kind of rectangular", image: "images/square-rectangle-shaped-true.png" },
            { key : "false", text : "Nope, it's square", image: "images/square-rectangle-shaped-false.png" }
        ],
        visibleWhen : [{ key : "carapaceShape", value : "square" }],
        question : "For square shaped crabs, is the crab noticably wider than it is long (i.e. a rectangle)? ",
        showHelpText : true,
        helpText : "A few crabs have been described as barrel shapped and their front and back surfaces are noticably longer than their sides."
    },    
    {
        key : "surfaceTexture",
        possibleValues : [
            { key : "spikey", text : "Spikey" },
            { key : "hairy", text : "Hairy" },
            { key : "bumpy", text : "Bumpy" },
            { key : "smooth", text : "Smooth" },
            { key : "seaweed", text : "Seaweed" }
        ],
        question : "What does the top of just the shell feel/look like?",
        helpText : "The surface (the bit that faces the sky) of the shell can be different textures. It might be spikey (for hooking seaweed into), bumpy or smooth, or even various lengths of hair (which when out of the water can look muddy/fuzzy). For this question ignore the surface texture of legs/claws. <br/> The texture can differ sometimes for the same type of crab; i.e. one might be furry/hairy while another of the same type is smooth."
    }
]