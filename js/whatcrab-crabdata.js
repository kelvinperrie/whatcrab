var crabData = [
    {
        commonName : "New Zealand Half-Crab",
        aka : ["Blue Half-Crab"],
        scientificName : "Petrolisthes elongatus",
        attributes : [
            { key: "carapaceShape" , values : ["triangle", "round"] },
            { key : "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["smooth"]},
            { key: "halfCrab", values : ["true"]},
            { key : "camouflageCrab", values : ["false"] },
            { key : "pillboxCrab", values : ["false"] }
        ],
        details : [
            { text: "Only 6 legs (excluding claws)"},
            { text: "Shell very flat and no teeth/spikes on side"},
            { text: "Claws very flat and smooth"},
            { text: "Often green, but has a wide range of colours"}
        ],
        similarTo: [
            { key: "Petrolisthes novaezelandiae", label: "Red Half-Crab" }
        ],
        images : [
            // { url : "images/crabs/nzhalfcrab01.gif" },
            { url : "images/crabs/nzhalfcrab01.jpg" },
            { url : "images/crabs/nzhalfcrab02.jpg" },
            { url : "images/crabs/nzhalfcrab03.jpg" },
            { url : "images/crabs/nzhalfcrab04.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/410371-Petrolisthes-elongatus"
    },
    {
        commonName : "Red Half-Crab",
        scientificName : "Petrolisthes novaezelandiae",
        attributes : [
            { key: "carapaceShape" , values : ["triangle", "round"] },
            { key : "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["smooth"]},
            { key: "halfCrab", values : ["true"]},
            { key: "camouflageCrab", values : ["false"] },
            { key : "pillboxCrab", values : ["false"] }
        ],
        details : [
            { text: "Only 6 legs (excluding claws)"},
            { text: "Shell very flat and on teeth/spikes on side"},
            { text: "Claws very flat with a ridge running along the surface"},
            { text: "Coluring is red to brown"}
        ],
        similarTo: [
            { key: "Petrolisthes elongatus", label: "New Zealand Half-Crab" }
        ],
        images : [
            { url : "images/crabs/redhalfcrab01.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/471708-Petrolisthes-novaezelandiae"
    },
    {
        commonName : "Big-Handed Crab",
        scientificName : "Heterozius rotundifrons",
        attributes : [
            { key: "carapaceShape" , values : ["oval"] },
            { key : "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["smooth"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] }
        ],
        details : [
            { text: "Shell is oval shapped; wider than long"},
            { text: "Shell has no teeth/spikes on side"},
            { text: "Male has one large claw"},
            { text: "Legs can be a bit furry"},
            { text: "Tips of claws yellow"},
            { text: "Coluring is light brown/green"}
        ],
        similarTo: [
            { key: "Ozius deplanatus", label: "Iron Crab" },
            { key: "Pilumnopeus serratifrons", label: "Smooth-Handed Crab" },
            { key: "Pilumnus lumpinus", label: "Hairy Crab" },
            { key: "Metacarcinus novaezelandiae", label: "Pie Crust Crab" }
        ],
        images : [
            // { url : "images/crabs/bighandcrab01.gif" },
            { url : "images/crabs/bighandcrab01.jpg" },
            { url : "images/crabs/bighandcrab02.jpg" },
            { url : "images/crabs/bighandcrab03.jpg" },
            { url : "images/crabs/bighandcrab04.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/410714-Heterozius-rotundifrons"
    },
    {
        commonName : "Pie Crust Crab",
        scientificName : "Metacarcinus novaezelandiae",
        attributes : [
            { key: "carapaceShape" , values : ["oval"] },
            { key : "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["smooth"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] }
        ],
        details : [
            { text: "Shell is oval shapped; wider than long."},
            { text: "Shell has no teeth/spikes on side."},
            { text: "Shell front looks like pushed together pastry of a pie."},
            { text: "Coluring is brown, can be reddish."}
        ],
        similarTo: [
            { key: "Ozius deplanatus", label: "Iron Crab" },
            { key: "Pilumnopeus serratifrons", label: "Smooth-Handed Crab" },
            { key: "Pilumnus lumpinus", label: "Hairy Crab" },
            { key: "Heterozius rotundifrons", label: "Big-Handed Crab" }
        ],
        images : [
            { url : "images/crabs/piecrustcrab01.jpg" },
            { url : "images/crabs/piecrustcrab02.jpg" },
            { url : "images/crabs/piecrustcrab03.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/410433-Metacarcinus-novaezelandiae"
    },
    {
        commonName : "Policeman Crab",
        scientificName : "Neommatocarcinus huttoni",
        attributes : [
            { key: "carapaceShape" , values : ["triangle", "other"] },
            { key : "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["smooth"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] }
        ],
        details : [
            { text: "Shell wider than long. The front corners of the shell end in outward facing triangular points"},
            { text: "Coluring is mostly white with bits in brighter (yellowish, reddish, orange) colours"}
        ],
        similarTo: [],
        images : [
            { url : "images/crabs/policemancrab01.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/471045-Neommatocarcinus-huttoni"
    },
    {
        commonName : "Purple Rock Crab",
        scientificName : "Leptograpsus variegatus",
        aka : ["Swift Footed Shore Crab", "Purple Ninja Crab"],
        attributes : [
            { key: "carapaceShape" , values : ["square","round"] },
            { key : "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["smooth","bumpy"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] },
            { key : "pillboxCrab", values : ["false"] }
        ],
        details : [
            { text: "Shell squarish; Sides can sometimes appear quite rounded."},
            { text: "The claws are purple with white dots."},
            { text: "Shell has a couple of very small teeth/spikes on the side, behind the eyes."},
            { text: "Colouring is purple with some white. Juveniles can be darker, almost black."},
            { text: "When dead the shells can turn to a red colour."},
            { text: "Often found higher on the beach, in rocky gaps. Often on top of rocks."}
        ],
        similarTo: [
            { key: "Hemigrapsus sexdentatus", label: "Common Rock Crab" }
        ],
        images : [
            // { url : "images/crabs/purplerockcrab01.gif" },
            { url : "images/crabs/purplerockcrab01.jpg" },
            { url : "images/crabs/purplerockcrab02.jpg" },
            { url : "images/crabs/purplerockcrab03.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/326099-Leptograpsus-variegatus"
    },
    {
        commonName : "Common Rock Crab",
        scientificName : "Hemigrapsus sexdentatus",
        aka : ["Purple Rock Crab (there is another crab by this name)"],
        attributes : [
            { key: "carapaceShape" , values : ["square"] },
            { key : "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["smooth"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] }
        ],
        details : [
            { text: "Shell is a squarish shape."},
            { text: "Looks very similar to the Purple Rock Crab, but this crab does NOT have white dots on the claws."},
            { text: "Shell has three tooth like notches on the side."},
            { text: "Colour range variable, often pale with dark red or purple patches."}
        ],
        similarTo: [
            { key: "Leptograpsus variegatus", label: "Purple Rock Crab" },
            { key: "Cyclograpsus lavauxi", label: "Smooth Shore Crab" } ,
            { key: "Hemigrapsus crenulatus", label: "Hairy-handed Crab" }  
        ],
        images : [
            { url : "images/crabs/commonrockcrab01.jpg" },
            { url : "images/crabs/commonrockcrab02.jpg" },
            { url : "images/crabs/commonrockcrab03.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/410820-Hemigrapsus-sexdentatus"
    },
    {
        commonName : "Paua Spider Crab",
        scientificName : "Elamena producta",
        attributes : [
            { key: "carapaceShape" , values : ["triangle", "oval"] },
            { key : "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["smooth"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] }
        ],
        details : [
            { text: "Shell is overall oval but with flat edges on the front."},
            { text: "The area between the eyes sticks out past the eyes in a way that the overall shape could be considered triangular."},
            { text: "Shell has no teeth/spike on each side."},
            { text: "Colour ranges through brown, white and purple; often red."}
        ],
        similarTo: [
            { key: "Halicarcinus cookii", label: "Cook's Pillbox Crab" },
            { key: "Halicarcinus innominatus", label: "Flat Pillbox Crab" },
            { key: "Halicarcinus varius", label: "Variable Pillbox Crab" },
            { key: "Halicarcinus whitei", label: "Estuarine Pillbox Crab" }  
        ],
        images : [
            // { url : "images/crabs/pauacrab01.gif" },
            { url : "images/crabs/pauacrab03.jpg" },
            { url : "images/crabs/pauacrab04.jpg" },
            { url : "images/crabs/pauacrab01.jpg" },
            { url : "images/crabs/pauacrab02.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/471049-Elamena-producta"
    },
    {
        commonName : "Cook's Pillbox Crab",
        aka : ["Pillbox Crab"],
        scientificName : "Halicarcinus cookii",
        attributes : [
            { key: "carapaceShape" , values : ["round"] },
            { key : "toothOnMargin", values : ["true"] },
            { key : "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["smooth"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] },
            { key: "pillboxCrab", values : ["true"] }
        ],
        details : [
            { text: "Shell is overall round but with flatish edges towards the front."},
            { text: "Shell has a small tooth/spike on each side."},
            { text: "Crab is smooth and not furry"},
            { text: "The area between the eyes is about level with the eyes and forms three points."},
            { text: "Colour range variable."}
        ],
        similarTo: [
            { key: "Halicarcinus innominatus", label: "Flat Pillbox Crab" },
            { key: "Halicarcinus varius", label: "Variable Pillbox Crab" },
            { key: "Halicarcinus whitei", label: "Estuarine Pillbox Crab" }  
        ],
        images : [
            { url : "images/crabs/cookspillboxcrab01.jpg" },
            { url : "images/crabs/cookspillboxcrab02.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/471078-Halicarcinus-cookii"
    },
    {
        commonName : "Flat Pillbox Crab",
        scientificName : "Halicarcinus innominatus",
        attributes : [
            { key : "carapaceShape", values : ["round"] },
            { key : "toothOnMargin", values : ["false"] },
            { key : "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["smooth"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] },
            { key: "pillboxCrab", values : ["true"] }
        ],
        details : [
            { text: "Shell is mostly round; a bit wider than long."},
            { text: "Shell does NOT have a small tooth/spike on each side."},
            { text: "Crab is smooth and not furry"},
            { text: "The area between the eyes is about level with the eyes and forms three points."},
            { text: "Colour range variable; often brown or white with mottling."}
        ],
        similarTo: [
            { key: "Halicarcinus cookii", label: "Cook's Pillbox Crab" },
            { key: "Halicarcinus varius", label: "Variable Pillbox Crab" },
            { key: "Halicarcinus whitei", label: "Estuarine Pillbox Crab" }  
        ],
        images : [
            // { url : "images/crabs/flatpillboxcrab01.gif" },
            { url : "images/crabs/flatpillboxcrab01.jpg" },
            { url : "images/crabs/flatpillboxcrab03.jpg" },
            { url : "images/crabs/flatpillboxcrab02.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/410832-Halicarcinus-innominatus"
    },
    {
        commonName : "Variable Pillbox Crab",
        scientificName : "Halicarcinus varius",
        attributes : [
            { key : "carapaceShape", values : ["round"] },
            { key : "toothOnMargin", values : ["true"] },
            { key : "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["smooth"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] },
            { key: "pillboxCrab", values : ["true"] }
        ],
        details : [
            { text: "Shell is rounded."},
            { text: "Shell has a small tooth/spike on each side."},
            { text: "Crab might appear slightly furry"},
            { text: "The area between the eyes is about level with the eyes and forms three points (which may be hard to see)."},
            { text: "Colour is often brown or light green."}
        ],
        similarTo: [
            { key: "Halicarcinus cookii", label: "Cook's Pillbox Crab" },
            { key: "Halicarcinus innominatus", label: "Flat Pillbox Crab" },
            { key: "Halicarcinus whitei", label: "Estuarine Pillbox Crab" }  
        ],
        images : [
            { url : "images/crabs/variablepillboxcrab01.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/416625-Halicarcinus-varius"
    },
    {
        commonName : "Estuarine Pillbox Crab",
        aka: ["White's False Spider Crab"],
        scientificName : "Halicarcinus whitei",
        attributes : [
            { key : "carapaceShape", values : ["round"] },
            { key : "toothOnMargin", values : ["false"] },
            { key : "covering", values : ["setae"] },
            { key : "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["smooth", "hairy"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] },
            { key: "pillboxCrab", values : ["true"] }
        ],
        details : [
            { text: "Shell is rounded."},
            { text: "Shell does NOT have a small tooth/spike on each side."},
            { text: "Crab might appear furry"},
            { text: "The area between the eyes sticks out past the eye level and forms three points."},
            { text: "Colour range variable; often light brown."}
        ],
        similarTo: [
            { key: "Halicarcinus cookii", label: "Cook's Pillbox Crab" },
            { key: "Halicarcinus innominatus", label: "Flat Pillbox Crab" },
            { key: "Halicarcinus varius", label: "Variable Pillbox Crab" },
            { key: "Neohymenicus pubescens", label: "Neohymenicus pubescens" } 
        ],
        images : [
            { url : "images/crabs/estuarinepillboxcrab01.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/471051-Halicarcinus-whitei"
    },
    {
        commonName : "New Zealand Crown Crab",
        aka : ["False Spider Crab"],
        scientificName : "Hymenosoma depressum",
        attributes : [
            { key : "carapaceShape", values : ["round"] },
            { key : "toothOnMargin", values : ["false"] },
            { key : "covering", values : ["setae"] },
            { key : "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["smooth", "hairy"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] }
        ],
        images : [],
        natureWatchLink: "https://inaturalist.nz/taxa/471053-Hymenosoma-depressum",
        active: false
    },
    {
        commonName : null,
        scientificName : "Neohymenicus pubescens",
        attributes : [
            { key : "carapaceShape", values : ["round"] },
            { key : "toothOnMargin", values : ["false"] },
            { key : "covering", values : ["setae"] },
            { key : "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["hairy"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] },
            { key : "pillboxCrab", values : ["false"] }
        ],
        details : [
            { text: "Shell is rounded."},
            { text: "Crab will appear very furry"},
            { text: "The area between the eyes sticks out past the eye level."},
            { text: "Colouring is brown."}
        ],
        similarTo: [
            { key: "Halicarcinus cookii", label: "Cook's Pillbox Crab" },
            { key: "Halicarcinus innominatus", label: "Flat Pillbox Crab" },
            { key: "Halicarcinus varius", label: "Variable Pillbox Crab" },
            { key: "Halicarcinus whitei", label: "Estuarine Pillbox Crab" } 
        ],
        images : [
            // { url : "images/crabs/neopub01.gif" },
            { url : "images/crabs/neopub01.jpg" },
            { url : "images/crabs/neopub02.jpg" },
            { url : "images/crabs/neopub03.jpg" },
            { url : "images/crabs/neopub04.jpg"}
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/471492-Neohymenicus-pubescens"
    },
    {
        commonName : "Triangle Crab",
        scientificName : "Eurynolambrus australis",
        attributes : [
            { key : "carapaceShape", values : ["triangle"] },
            { key : "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["smooth"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] }
        ],
        details : [
            { text: "Shell is triangular."},
            { text: "Colour range variable; brown, white, red."}
        ],
        similarTo: [],
        images : [
            // { url : "images/crabs/trianglecrab01.gif" },
            { url : "images/crabs/trianglecrab01.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/424825-Eurynolambrus-australis"
    },
    {
        commonName : "Small Decorator Crab",
        aka : ["Camouflage Crab"],
        scientificName : "Notomithrax minor",
        attributes : [
            { key : "carapaceShape", values : ["triangle"] },
            { key : "covering", values : ["seaweed"] },
            { key : "camouflageCrab", values : ["true"] },
            { key : "posteriorSpines", values : ["false"] },
            { key : "lastLegsArePaddles", values : ["false"] },
            { key : "surfaceTexture", values : ["spikey","seaweed"]},
            { key: "halfCrab", values : ["false"]}
        ],
        details : [
            { text: "Shell is triangular with a rounded base."},
            { text: "Shell has no spines/spikes at the rear."},
            { text: "The surface of the shell will be spikey and probably covered in seaweed."},
            { text: "Claws may be dark red/purple or white with bluish markings."}
        ],
        similarTo: [
            { key: "Notomithrax peronii", label: "Peron's Decorator Crab" },
            { key: "Notomithrax ursus", label: "Hairy Seaweed Crab" }
        ],
        images : [
            { url : "images/crabs/smalldecoratorcrab01.jpg" },
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/410680-Notomithrax-minor"
    },
    {
        commonName : "Peron's Camouflage Crab",
        aka: ["Peron's Decorator Crab"],
        scientificName : "Notomithrax peronii",
        attributes : [
            { key : "carapaceShape", values : ["triangle"] },
            { key : "covering", values : ["seaweed"] },
            { key : "camouflageCrab", values : ["true"] },
            { key : "posteriorSpines", values : ["true"] },
            { key : "lastLegsArePaddles", values : ["false"] },
            { key : "surfaceTexture", values : ["spikey","seaweed"]},
            { key: "halfCrab", values : ["false"]}
        ],
        details : [
            { text: "Shell is triangular with a rounded base."},
            { text: "Shell has two very small spines/spikes at the rear."},
            { text: "The surface of the shell will be spikey and probably covered in seaweed."},
            { text: "Claws dark green/brown."}
        ],
        similarTo: [
            { key: "Notomithrax minor", label: "Small Decorator Crab" },
            { key: "Notomithrax ursus", label: "Hairy Seaweed Crab" }
        ],
        images : [
            { url : "images/crabs/peronscamouflagecrab03.jpg" },
            { url : "images/crabs/peronscamouflagecrab01.jpg" },
            { url : "images/crabs/peronscamouflagecrab02.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/410683-Notomithrax-peronii"
    },
    {
        commonName : "Hairy Seaweed Crab",
        scientificName : "Notomithrax ursus",
        attributes : [
            { key : "carapaceShape", values : ["triangle"] },
            { key : "covering", values : ["seaweed"] },
            { key : "camouflageCrab", values : ["true"] },
            { key : "posteriorSpines", values : ["false"] },
            { key : "lastLegsArePaddles", values : ["false"] },
            { key : "surfaceTexture", values : ["spikey","seaweed", "hairy"]},
            { key: "halfCrab", values : ["false"]}
        ],
        details : [
            { text: "Shell is triangular with a rounded base."},
            { text: "Shell has no spines/spikes at the rear."},
            { text: "The surface of the shell will be spikey and probably covered in seaweed."},
            { text: "Claws dark orange/purple."}
        ],
        similarTo: [
            { key: "Notomithrax minor", label: "Small Decorator Crab" },
            { key: "Notomithrax peronii", label: "Peron's Decorator Crab" }
        ],
        images : [
            // { url : "images/crabs/hairyseaweedcrab01.gif" },
            { url : "images/crabs/hairyseaweedcrab01.jpg" },
            { url : "images/crabs/hairyseaweedcrab02.jpg" },
            { url : "images/crabs/hairyseaweedcrab04.jpg" },
            { url : "images/crabs/hairyseaweedcrab03.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/410681-Notomithrax-ursus"
    },
    {
        commonName : "Iron Crab",
        scientificName : "Ozius deplanatus",
        attributes : [
            { key : "carapaceShape", values : ["oval"] },
            { key : "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["smooth"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] }
        ],
        details : [
            { text: "Shell is oval shapped; wider than long."},
            { text: "Front of the shell has blunt outward facing bumps"},
            { text: "Shell is smooth, legs can appear furry."},
            { text: "Claws have black tips."},
            { text: "Coluring is dark brown. Younger crabs can be whitish."}
        ],
        similarTo: [
            { key: "Heterozius rotundifrons", label: "Big Hand Crab" },
            { key: "Pilumnopeus serratifrons", label: "Smooth-Handed Crab" }
        ],
        images : [
            // { url : "images/crabs/ironcrab01.gif" },
            { url : "images/crabs/ironcrab01.jpg" },
            { url : "images/crabs/ironcrab02.jpg" },
            { url : "images/crabs/ironcrab03.jpg" },
            { url : "images/crabs/ironcrab04.jpg" },
            { url : "images/crabs/ironcrab05.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/496210-Ozius-deplanatus"
    },
    {
        commonName : "Smooth-Handed Crab",
        scientificName : "Pilumnopeus serratifrons",
        attributes : [
            { key : "carapaceShape", values : ["oval"] },
            { key : "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["smooth", "hairy"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] }
        ],
        details : [
            { text: "Shell is oval shapped; wider than long."},
            { text: "Front of the shell has blunt outward facing bumps"},
            { text: "Shell can appear smooth or can appear slightly furry/muddy, legs can appear furry."},
            { text: "Claws have dark brown tips."},
            { text: "Coluring is dark brown."}
        ],
        similarTo: [
            { key: "Ozius deplanatus", label: "Iron Crab" }
        ],
        images : [
            // { url : "images/crabs/smoothhandedcrab01.gif" },
            { url : "images/crabs/smoothhandedcrab01.jpg" },
            { url : "images/crabs/smoothhandedcrab02.jpg" },
            { url : "images/crabs/smoothhandedcrab03.jpg" },
            { url : "images/crabs/smoothhandedcrab04.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/471785-Pilumnopeus-serratifrons"
    },
    {
        commonName : "Hairy Crab",
        scientificName : "Pilumnus lumpinus",
        attributes : [
            { key : "carapaceShape",  values : ["oval"] },
            { key : "covering", values : ["setae"] },
            { key : "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["hairy"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] }
        ],
        details : [
            { text: "Shell is oval shapped; wider than long."},
            { text: "Entire crab will appear furry/muddy due to being covered in 'hairs'."},
            { text: "Claws have dark brown tips."},
            { text: "Coluring will show as light brown due to covering of 'hairs'."}
        ],
        similarTo: [
            { key: "Pilumnus novaezelandiae", label: "Bristle Crab" }
        ],
        images : [
            // { url : "images/crabs/hairycrab01.gif" },
            { url : "images/crabs/hairycrab01.jpg" },
            { url : "images/crabs/hairycrab02.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/471785-Pilumnopeus-serratifrons"
    },
    {
        commonName : "Pea Crab",
        scientificName : "Nepinnotheres novaezelandiae",
        attributes : [
            { key : "carapaceShape",  values : ["round"] },
            { key : "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["smooth"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] },
            { key : "pillboxCrab", values : ["false"] }
        ],
        details : [
            { text: "Shell is round, shapped like a pea."},
            { text: "Shell are smooth."},
            { text: "Claws have dark brown tips."},
            { text: "Coluring range variable; whites, browns and oranges."}
        ],
        similarTo: [],
        images : [
            { url : "images/crabs/peacrab01.jpg" },
            { url : "images/crabs/peacrab02.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/472053-Nepinnotheres-novaezelandiae"
    },
    {
        commonName : "Bristle Crab",
        scientificName : "Pilumnus novaezelandiae",
        attributes : [
            { key : "carapaceShape",  values : ["oval"] },
            { key : "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["hairy"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] }
        ],
        details : [
            { text: "Shell is oval shapped; wider than long."},
            { text: "Entire crab will appear furry/muddy due to being covered in 'hairs'; Hairs will be in a range of lengths with some quite long."},
            { text: "Claws have dark brown tips. Underside of claws may be white."},
            { text: "Coluring beneath the hairs could be purple or yellow(?)."}
        ],
        similarTo: [
            { key: "Pilumnus lumpinus", label: "Hairy Crab" }
        ],
        images : [
            { url: "images/crabs/bristlecrab01.jpg" },
            { url: "images/crabs/bristlecrab02.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/471044-Pilumnus-novaezelandiae"
    },
    {
        commonName : "Red Rock Crab",
        aka : ["Red Ninja Crab"],
        scientificName : "Guinusia chabrus",
        attributes : [
            { key: "carapaceShape" , values : ["round", "square"] },
            { key : "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["smooth","bumpy"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] },
            { key : "pillboxCrab", values : ["false"] }
        ],
        details : [
            { text: "Shell could be seen as either round or square shapped."},
            { text: "Shell front and sides have jagged spikes."},
            { text: "Claws have ridges of white bumps."},
            { text: "Coluring is red/orange with white underneath."}
        ],
        similarTo: [
            { key: "Nectocarcinus antarcticus", label: "Red Swimming Crab" }
        ],
        images : [
            // { url : "images/crabs/redrockcrab01.gif" },
            { url : "images/crabs/redrockcrab01.jpg" },
            { url : "images/crabs/redrockcrab02.jpg" },
            { url : "images/crabs/redrockcrab03.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/319553-Guinusia-chabrus"
    },
    {
        commonName : "Asian Paddle Crab",
        scientificName : "Charybdis japonica",
        attributes : [
            { key : "carapaceShape", values : ["oval"] },
            { key : "lastLegsArePaddles", values : ["true"] },
            { key: "surfaceTexture", values : ["smooth", "bumpy"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] }
        ],
        details : [
            { text: "Shell is oval shapped."},
            { text: "Shell has five teeth like spikes on each side with eight spikes between the eyes."},
            { text: "Last leg pair has paddles."},
            { text: "End of claws can have dark brown amongst white or a light blue."},
            { text: "Coluring is green. Underside of the front of the shell can have light blue markings."}
        ],
        similarTo: [
            { key: "Ovalipes catharus", label: "Paddle Crab" }
        ],
        images : [
            { url : "images/crabs/asianpaddlecrab01.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/209010-Charybdis-japonica"
    },
    {
        commonName : "Red Swimming Crab",
        scientificName : "Nectocarcinus antarcticus",
        attributes : [
            { key : "carapaceShape", values : ["square", "oval"] },
            { key : "lastLegsArePaddles", values : ["true"] },
            { key: "surfaceTexture", values : ["bumpy"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] }
        ],
        details : [
            { text: "Shell is oval shapped."},
            { text: "Shell has four teeth like spikes on each side."},
            { text: "Last leg pair has paddles."},
            { text: "End of claws white or dark red."},
            { text: "Coluring is red; whitish and oranges."}
        ],
        similarTo: [
            { key: "Guinusia chabrus", label: "Red Rock Crab " }
        ],
        images : [
            { url : "images/crabs/redswimmingcrab01.jpg" },
            { url : "images/crabs/redswimmingcrab02.jpg" },
            { url : "images/crabs/redswimmingcrab03.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/471041-Nectocarcinus-antarcticus"
    },
    {
        commonName : "Paddle Crab",
        scientificName : "Ovalipes catharus",
        attributes : [
            { key : "carapaceShape", values : ["oval"] },
            { key : "lastLegsArePaddles", values : ["true"] },
            { key: "surfaceTexture", values : ["smooth"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] }
        ],
        details : [
            { text: "Shell is oval shapped."},
            { text: "Shell has five teeth like spikes on each side, with four spikes between the eyes."},
            { text: "Last leg pair has paddles."},
            { text: "Paddles can be a bluish colour."},
            { text: "Coluring is light brown with dark spots, can have redish/orange areas."}
        ],
        similarTo: [
            { key: "Charybdis japonica", label: "Asian Paddle Crab" }
        ],
        images : [
            { url : "images/crabs/paddlecrab01.jpg" },
            { url : "images/crabs/paddlecrab02.jpg" },
            { url : "images/crabs/paddlecrab03.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/144096-Ovalipes-catharus"
    },
    {
        commonName : "Sentinel Crab",
        scientificName : "Hemiplax hirtipes",
        attributes : [
            { key : "carapaceShape", values : ["square"] },
            { key : "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["smooth","hairy"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] }
        ],
        details : [
            { text: "Shell is square/rectangle shapped, wider than long."},
            { text: "Shell has a couple of teeth like spikes on each side."},
            { text: "Legs can have a furry appearance."},
            { text: "Coluring can be light brown/orange with dark spots."}
        ],
        similarTo: [
            { key: "Austrohelice crassa", label: "Burrowing Mud Crab" }
        ],
        images : [
            { url : "images/crabs/sentinelcrab01.jpg" },
            { url : "images/crabs/sentinelcrab02.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/416671-Hemiplax-hirtipes"
    },
    {
        commonName : "Tunneling Mud Crab",
        scientificName : "Austrohelice crassa",
        aka : ["Burrowing Mud Crab"],
        attributes : [
            { key : "carapaceShape", values : ["square"] },
            { key : "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["smooth"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] }
        ],
        details : [
            { text: "Shell is square/rectangle shapped, wider than long."},
            { text: "Shell has a couple of teeth like spikes on each side."},
            { text: "Claw tips generally lighter coloured than the body; almost white."},
            { text: "Coluring brown or green."}
        ],
        similarTo: [
            { key: "Hemiplax hirtipes", label: "Sentinel Crab" },
            { key: "Hemigrapsus crenulatus", label: "Hairy-handed Crab" }
        ],
        images : [
            { url : "images/crabs/tunnelingmudcrab01.jpg" },
            { url : "images/crabs/tunnelingmudcrab02.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/121373-Austrohelice-crassa"
    },
    {
        commonName : "Smooth Shore Crab",
        scientificName : "Cyclograpsus lavauxi",
        attributes : [
            { key : "carapaceShape", values : ["square"] },
            { key : "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["smooth"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] }
        ],
        details : [
            { text: "Shell is square/rectangle shapped, wider than long."},
            { text: "Shell sides are smooth, with no teeth like spikes."},
            { text: "Coluring varies; often dark or light brown, can be redish brown or whitish with dark spots/mottling."}
        ],
        similarTo: [
            { key: "Hemigrapsus sexdentatus", label: "Common Rock Crab" },
            { key: "Hemigrapsus crenulatus", label: "Hairy-handed Crab" },
            { key: "Planes minutus", label: "Gulfweed Crab" }
        ],
        images : [
            // { url : "images/crabs/smoothshorecrab01.gif" },
            { url : "images/crabs/smoothshorecrab01.jpg" },
            { url : "images/crabs/smoothshorecrab02.jpg" },
            { url : "images/crabs/smoothshorecrab03.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/410426-Cyclograpsus-lavauxi"
    },
    {
        commonName : "Hairy-Handed Crab",
        scientificName : "Hemigrapsus crenulatus",
        attributes : [ 
            { key : "carapaceShape", values : ["square"] },
            { key : "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["smooth"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] }
        ],
        details : [
            { text: "Shell is square but with quite curved forward corners."},
            { text: "Shell has two teeth like spikes on each side."},
            { text: "Legs can appear quite furry."},
            { text: "Coluring variable; Can be green, brown, reddish, largly white. Often has large spots or mottling."}
        ],
        similarTo: [
            { key: "Hemigrapsus sexdentatus", label: "Common Rock Crab" },
            { key: "Austrohelice crassa", label: "Tunneling Mud Crab" }, 
            { key: "Cyclograpsus lavauxi", label: "Smooth Shore Crab" } 
        ],
        images : [
            // { url : "images/crabs/hairyhandedcrab01.gif" },
            { url : "images/crabs/hairyhandedcrab01.jpg" },
            { url : "images/crabs/hairyhandedcrab02.jpg" },
            { url : "images/crabs/hairyhandedcrab03.jpg" },
            { url : "images/crabs/hairyhandedcrab04.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/143936-Hemigrapsus-crenulatus"
    },
    {
        commonName : "Sponge Crab",
        scientificName : "Metadromia wilsoni",
        attributes : [ 
            { key : "carapaceShape", values : ["oval"] },
            { key : "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["bumpy"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] }
        ],
        details : [
            { text: "Shell is oval but not much wider than long."},
            { text: "Shell has large, smooth bumps; resembles a sponge."},
            { text: "Shell has no teeth like spikes on each side."},
            { text: "Inner areas of claws can appear a bit furry."},
            { text: "Coluring red or reddish brown."}
        ],
        similarTo: [],
        images : [
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/523181-Metadromia-wilsoni"
    },
    {
        commonName : "Tuberculate Pear Crab",
        scientificName : "Pyromaia tuberculata",
        attributes : [ 
            { key : "carapaceShape", values : ["triangle"] },
            { key : "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["bumpy","seaweed"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] }
        ],
        details : [
            { text: "Shell is triangle shaped."},
            { text: "Shell can be bumpy or covered in 'hairs'/sedmients."},
            { text: "Can appear furry/muddy due to a covering of 'hairs'."},
            { text: "Coluring light green/brown."}
        ],
        similarTo: [
            { key: "Notomithrax minor", label: "Small Decorator Crab" },
            { key: "Notomithrax peronii", label: "Peron's Decorator Crab" },
            { key: "Notomithrax ursus", label: "Hairy Seaweed Crab" }
        ],
        images : [ 
            { url : "images/crabs/tuberculatepearcrab01.jpg" },
            { url : "images/crabs/tuberculatepearcrab02.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/523181-Metadromia-wilsoni"
    },
    {
        commonName : "Gulfweed Crab",
        scientificName : "Planes minutus",
        attributes : [ 
            { key : "carapaceShape", values : ["square"] },
            { key : "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["smooth"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] }
        ],
        details : [
            { text: "Shell is squarish, but has rounded sides."},
            { text: "Shell sides are smooth, with no teeth like spikes."},
            { text: "The first leg pairs have a set of spikes where they join with the body."},
            { text: "Often found on or around objects that have been floating in the ocean."},
            { text: "Coluring very variable; can be blue, dark brown, almost black, yellow brown."}
        ],
        similarTo: [
            { key: "Cyclograpsus lavauxi", label: "Smooth Shore Crab" } 
        ],
        images : [ 
            { url : "images/crabs/gulfweedcrab01.jpg" },
            { url : "images/crabs/gulfweedcrab02.jpg" },
            { url : "images/crabs/gulfweedcrab03.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/295349-Planes-minutus"
    }
]