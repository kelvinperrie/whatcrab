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
            { key : "camouflageCrab", values : ["false"] }
        ],
        details : [
            "Only 6 legs (excluding claws)",
            "Shell very flat and no teeth/spikes on side",
            "Claws very flat and smooth",
            "Often green, but has a wide range of colours"
        ],
        similarTo: [
            { key: "Petrolisthes novaezelandiae", label: "Red Half-Crab" }
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/58026368/large.jpg?1576450688" },
            { url : "https://static.inaturalist.org/photos/63808417/large.jpeg?1584517337" }
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
            { key: "camouflageCrab", values : ["false"] }
        ],
        details : [
            "Only 6 legs (excluding claws)",
            "Shell very flat and on teeth/spikes on side",
            "Claws very flat with a ridge running along the surface",
            "Coluring is red to brown"
        ],
        similarTo: [
            { key: "Petrolisthes elongatus", label: "New Zealand Half-Crab" }
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/59758890/large.jpg?1579219623" }
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
            "Shell is oval shapped; wider than long",
            "Shell has no teeth/spikes on side",
            "Male has one large claw",
            "Legs can be a bit furry",
            "Tips of claws yellow",
            "Coluring is light brown/green "
        ],
        similarTo: [
            { key: "Ozius deplanatus", label: "Iron Crab" },
            { key: "Pilumnopeus serratifrons", label: "Smooth-Handed Crab" },
            { key: "Pilumnus lumpinus", label: "Hairy Crab" },
            { key: "Metacarcinus novaezelandiae", label: "Pie Crust Crab" }
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/64200638/large.jpeg?1584863717" },
            { url : "https://static.inaturalist.org/photos/52078601/large.jpg?1569120977" },
            { url : "https://static.inaturalist.org/photos/63809468/large.jpeg?1584519105" },
            { url : "https://static.inaturalist.org/photos/63809462/large.jpeg?1584519088" }
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
            "Shell is oval shapped; wider than long",
            "Shell has no teeth/spikes on side",
            "Shell front looks like pushed together pastry of a pie",
            "Coluring is brown, can be reddish "
        ],
        similarTo: [
            { key: "Ozius deplanatus", label: "Iron Crab" },
            { key: "Pilumnopeus serratifrons", label: "Smooth-Handed Crab" },
            { key: "Pilumnus lumpinus", label: "Hairy Crab" },
            { key: "Heterozius rotundifrons", label: "Big-Handed Crab" }
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/63808393/large.jpeg?1584517295" },
            { url : "https://static.inaturalist.org/photos/59642254/large.jpg?1579053800" },
            { url : "https://static.inaturalist.org/photos/59642252/large.jpg?1579053798" }
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
            "Shell wider than long. The front sides of the shell end in triangular points",
            "Coluring is mostly white with bits in brighter (yellowish, reddish, orange) colours"
        ],
        similarTo: [],
        images : [
            { url : "https://static.inaturalist.org/photos/31253008/large.jpg?1549783369" }
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
            { key: "camouflageCrab", values : ["false"] }
        ],
        details : [
            "Shell squarish; Sides can sometimes appear quite rounded.",
            "The claws are purple with white dots.",
            "Shell has a couple of very small teeth/spikes on the side, behind the eyes",
            "Colouring is purple with some white. Juveniles can be darker, almost black",
            "When dead the shells can turn to a red colour",
            "Often found higher on the beach, in rocky gaps. Often on top of rocks."
        ],
        similarTo: [
            { key: "Hemigrapsus sexdentatus", label: "Common Rock Crab" }
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/65344513/large.jpeg?1585790060" },
            { url : "https://static.inaturalist.org/photos/59867596/large.jpg?1579394117" },
            { url : "https://static.inaturalist.org/photos/58026735/large.jpg?1576451040" }
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
            "Shell is a squarish shape.",
            "Looks very similar to the Purple Rock Crab, but this crab does NOT have white dots on the claws.",
            "Shell has three tooth like notches on the side.",
            "Colour range variable, often pale with dark red or purple patches."
        ],
        similarTo: [
            { key: "Leptograpsus variegatus", label: "Purple Rock Crab" },
            { key: "Cyclograpsus lavauxi", label: "Smooth Shore Crab" } ,
            { key: "Hemigrapsus crenulatus", label: "Hairy-handed Crab" }  
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/59867812/large.jpg?1579394358" },
            { url : "https://static.inaturalist.org/photos/64200862/large.jpeg?1584864103" },
            { url : "https://static.inaturalist.org/photos/36119006/large.jpg?1556341147" }
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
            "Shell is overall oval but with flat edges on the front.",
            "The area between the eyes sticks out past the eyes in a way that the overall shape could be considered triangular.",
            "Shell has no teeth/spike on each side.",
            "Colour ranges through brown, white and purple; often red."
        ],
        similarTo: [
            { key: "Halicarcinus cookii", label: "Cook's Pillbox Crab" },
            { key: "Halicarcinus innominatus", label: "Flat Pillbox Crab" },
            { key: "Halicarcinus varius", label: "Variable Pillbox Crab" },
            { key: "Halicarcinus whitei", label: "Estuarine Pillbox Crab" }  
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/66571196/large.jpeg?1586643918" },
            { url : "https://static.inaturalist.org/photos/56734487/large.jpg?1574391148" }
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
            { key: "camouflageCrab", values : ["false"] }
        ],
        details : [
            "Shell is overall round but with flatish edges towards the front.",
            "Shell has a small tooth/spike on each side.",
            "Crab is smooth and not furry",
            "The area between the eyes is about level with the eyes and forms three points.",
            "Colour range variable."
        ],
        similarTo: [
            { key: "Halicarcinus innominatus", label: "Flat Pillbox Crab" },
            { key: "Halicarcinus varius", label: "Variable Pillbox Crab" },
            { key: "Halicarcinus whitei", label: "Estuarine Pillbox Crab" }  
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/52079954/large.jpg?1569122286" }
        ],
        natureWatchLink: "https://static.inaturalist.org/photos/52079954/large.jpg?1569122286"
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
            { key: "camouflageCrab", values : ["false"] }
        ],
        details : [
            "Shell is mostly round; a bit wider than long.",
            "Shell does NOT have a small tooth/spike on each side.",
            "Crab is smooth and not furry",
            "The area between the eyes is about level with the eyes and forms three points.",
            "Colour range variable; often brown or white with mottling."
        ],
        similarTo: [
            { key: "Halicarcinus cookii", label: "Cook's Pillbox Crab" },
            { key: "Halicarcinus varius", label: "Variable Pillbox Crab" },
            { key: "Halicarcinus whitei", label: "Estuarine Pillbox Crab" }  
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/28454186/large.jpeg?1543038599" },
            { url : "https://static.inaturalist.org/photos/26921887/large.jpeg?1540007564" }
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
            { key: "camouflageCrab", values : ["false"] }
        ],
        details : [
            "Shell is rounded.",
            "Shell has a small tooth/spike on each side.",
            "Crab might appear slightly furry",
            "The area between the eyes is about level with the eyes and forms three points (which may be hard to see).",
            "Colour is often brown or light green."
        ],
        similarTo: [
            { key: "Halicarcinus cookii", label: "Cook's Pillbox Crab" },
            { key: "Halicarcinus innominatus", label: "Flat Pillbox Crab" },
            { key: "Halicarcinus whitei", label: "Estuarine Pillbox Crab" }  
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/59640822/large.jpg?1579051845" }
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
            { key: "camouflageCrab", values : ["false"] }
        ],
        details : [
            "Shell is rounded.",
            "Shell does not have a small tooth/spike on each side.",
            "Crab might appear furry",
            "The area between the eyes sticks out past the eye level and forms three points.",
            "Colour range variable; often light brown."
        ],
        similarTo: [
            { key: "Halicarcinus cookii", label: "Cook's Pillbox Crab" },
            { key: "Halicarcinus innominatus", label: "Flat Pillbox Crab" },
            { key: "Halicarcinus varius", label: "Variable Pillbox Crab" },
            { key: "Neohymenicus pubescens", label: "Neohymenicus pubescens" } 
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/30676304/large.jpg?1548546813" }
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
            { key: "camouflageCrab", values : ["false"] }
        ],
        details : [
            "Shell is rounded.",
            "Crab will appear very furry",
            "The area between the eyes sticks out past the eye level.",
            "Colouring is brown."
        ],
        similarTo: [
            { key: "Halicarcinus cookii", label: "Cook's Pillbox Crab" },
            { key: "Halicarcinus innominatus", label: "Flat Pillbox Crab" },
            { key: "Halicarcinus varius", label: "Variable Pillbox Crab" },
            { key: "Halicarcinus whitei", label: "Estuarine Pillbox Crab" } 
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/64200577/large.jpeg?1584863612" },
            { url : "https://static.inaturalist.org/photos/29172890/large.jpeg?1544839594" },
            { url : "https://static.inaturalist.org/photos/58346532/large.jpg?1577053231" },
            { url : "https://static.inaturalist.org/photos/66075721/large.jpeg?1586303028"}
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
            "Shell is triangular.",
            "Colour range variable; brown, white, red."
        ],
        similarTo: [],
        images : [
            { url : "https://static.inaturalist.org/photos/59759094/large.jpg?1579219887" },
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
            "Shell is triangular with a rounded base.",
            "Shell has no spines/spikes at the rear.",
            "The surface of the shell will be spikey and probably covered in seaweed.",
            "Claws may be dark red/purple or white with bluish markings."
        ],
        similarTo: [
            { key: "Notomithrax peronii", label: "Peron's Decorator Crab" },
            { key: "Notomithrax ursus", label: "Hairy Seaweed Crab" }
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/29604637/large.jpeg?1545979036" },
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
            "Shell is triangular with a rounded base.",
            "Shell has two very small spines/spikes at the rear.",
            "The surface of the shell will be spikey and probably covered in seaweed.",
            "Claws dark green/brown."
        ],
        similarTo: [
            { key: "Notomithrax minor", label: "Small Decorator Crab" },
            { key: "Notomithrax ursus", label: "Hairy Seaweed Crab" }
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/43768712/large.jpg?1562115869" },
            { url : "https://static.inaturalist.org/photos/33868742/large.jpg?1554091330" }
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
            "Shell is triangular with a rounded base.",
            "Shell has no spines/spikes at the rear.",
            "The surface of the shell will be spikey and probably covered in seaweed.",
            "Claws dark orange/purple."
        ],
        similarTo: [
            { key: "Notomithrax minor", label: "Small Decorator Crab" },
            { key: "Notomithrax peronii", label: "Peron's Decorator Crab" }
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/48653558/large.jpg?1566200370" },
            { url : "https://static.inaturalist.org/photos/58346138/large.jpg?1577052802" },
            { url : "https://static.inaturalist.org/photos/36106015/large.jpg?1556337652" }
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
            "Shell is oval shapped; wider than long.",
            "Front of the shell has blunt outward facing bumps",
            "Shell is smooth, legs can appear furry.",
            "Claws have black tips.",
            "Coluring is dark brown. Younger crabs can be whitish."
        ],
        similarTo: [
            { key: "Heterozius rotundifrons", label: "Big Hand Crab" },
            { key: "Pilumnopeus serratifrons", label: "Smooth-Handed Crab" }
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/64200560/large.jpeg?1584863575" },
            { url : "https://static.inaturalist.org/photos/58603998/large.jpg?1577488288" },
            { url : "https://static.inaturalist.org/photos/50215076/large.jpg?1567499152" },
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
            "Shell is oval shapped; wider than long.",
            "Front of the shell has blunt outward facing bumps",
            "Shell can appear smooth or can appear slightly furry/muddy, legs can appear furry.",
            "Claws have dark brown tips.",
            "Coluring is dark brown."
        ],
        similarTo: [
            { key: "Ozius deplanatus", label: "Iron Crab" }
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/29568932/large.jpeg?1545892882" },
            { url : "https://static.inaturalist.org/photos/53457422/large.jpg?1570427238" },
            { url : "https://static.inaturalist.org/photos/53456631/large.jpg?1570426472" },
            { url : "https://static.inaturalist.org/photos/53455973/large.jpg?1570425718" },
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
            "Shell is oval shapped; wider than long.",
            "Entire crab will appear furry/muddy due to being covered in 'hairs'.",
            "Claws have dark brown tips.",
            "Coluring will show as light brown due to covering of 'hairs'."
        ],
        similarTo: [
            { key: "Pilumnus novaezelandiae", label: "Bristle Crab" }
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/35241504/large.jpg?1555731045" },
            { url : "https://static.inaturalist.org/photos/59759210/large.jpg?1579219986" }
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
            { key: "camouflageCrab", values : ["false"] }
        ],
        details : [
            "Shell is round, shapped like a pea.",
            "Shell are smooth.",
            "Claws have dark brown tips.",
            "Coluring range variable; whites, browns and oranges."
        ],
        similarTo: [],
        images : [
            { url : "https://static.inaturalist.org/photos/32723026/large.jpg?1552368945" },
            { url : "https://static.inaturalist.org/photos/32723024/large.jpg?1552368941" }
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
            "Shell is oval shapped; wider than long.",
            "Entire crab will appear furry/muddy due to being covered in 'hairs'; Hairs will be in a range of lengths with some quite long.",
            "Claws have dark brown tips. Underside of claws may be white.",
            "Coluring beneath the hairs could be purple or yellow(?)."
        ],
        similarTo: [
            { key: "Pilumnus lumpinus", label: "Hairy Crab" }
        ],
        images : [
            { url: "https://static.inaturalist.org/photos/53457806/large.jpg?1570427790" },
            { url: "https://static.inaturalist.org/photos/53457825/large.jpg?1570427812" }
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
            { key: "surfaceTexture", values : ["smooth"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] }
        ],
        details : [
            "Shell could be seen as either round or square shapped.",
            "Shell front and sides have jagged spikes.",
            "Claws have ridges of white bumps.",
            "Coluring is red/orange with white underneath."
        ],
        similarTo: [
            { key: "Nectocarcinus antarcticus", label: "Red Swimming Crab" }
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/47693819/large.jpg?1565414389" },
            { url : "https://static.inaturalist.org/photos/63808404/large.jpeg?1584517319" },
            { url : "https://static.inaturalist.org/photos/65344175/large.jpeg?1585789844" }
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
            "Shell is oval shapped.",
            "Shell has five teeth like spikes on each side with eight spikes between the eyes.",
            "Last leg pair has paddles.",
            "End of claws can have dark brown amongst white or a light blue.",
            "Coluring is green. Underside of the front of the shell can have light blue markings."
        ],
        similarTo: [
            { key: "Ovalipes catharus", label: "Paddle Crab" }
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/26031963/original.jpeg?1538620860" }
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
            "Shell is oval shapped.",
            "Shell has four teeth like spikes on each side.",
            "Last leg pair has paddles.",
            "End of claws white or dark red.",
            "Coluring is red; whitish and oranges."
        ],
        similarTo: [
            { key: "Guinusia chabrus", label: "Red Rock Crab " }
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/29604819/large.jpeg?1545979517" },
            { url : "https://static.inaturalist.org/photos/25732967/large.jpeg?1538183196" },
            { url : "https://static.inaturalist.org/photos/25733004/large.jpeg?1538183278" }
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
            "Shell is oval shapped.",
            "Shell has five teeth like spikes on each side, with four spikes between the eyes.",
            "Last leg pair has paddles.",
            "Paddles can be a bluish colour.",
            "Coluring is light brown with dark spots, can have redish/orange areas."
        ],
        similarTo: [
            { key: "Charybdis japonica", label: "Asian Paddle Crab" }
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/29603332/large.jpeg?1545974722" },
            { url : "https://static.inaturalist.org/photos/63045326/large.jpg?1583702591" },
            { url : "https://static.inaturalist.org/photos/59209991/large.jpg?1578365802" }
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
            "Shell is square/rectangle shapped, wider than long.",
            "Shell has a couple of teeth like spikes on each side.",
            "Legs can have a furry appearance.",
            "Coluring can be light brown/orange with dark spots."
        ],
        similarTo: [
            { key: "Austrohelice crassa", label: "Burrowing Mud Crab" }
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/29569046/large.jpeg?1545893169" },
            { url : "https://static.inaturalist.org/photos/59640046/large.jpg?1579050598" }
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
            "Shell is square/rectangle shapped, wider than long.",
            "Shell has a couple of teeth like spikes on each side.",
            "Claw tips generally lighter coloured than the body; almost white.",
            "Coluring brown or green."
        ],
        similarTo: [
            { key: "Hemiplax hirtipes", label: "Sentinel Crab" },
            { key: "Hemigrapsus crenulatus", label: "Hairy-handed Crab" }
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/41125277/large.jpg?1559802431" },
            { url : "https://static.inaturalist.org/photos/41125280/large.jpg?1559802433" }
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
            "Shell is square/rectangle shapped, wider than long.",
            "Shell sides are smooth, with no teeth like spikes.",
            "Coluring varies; often dark or light brown, can be redish brown or whitish with dark spots/mottling."
        ],
        similarTo: [
            { key: "Hemigrapsus sexdentatus", label: "Common Rock Crab" },
            { key: "Hemigrapsus crenulatus", label: "Hairy-handed Crab" },
            { key: "Planes minutus", label: "Gulfweed Crab" }
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/59209635/large.jpg?1578365462" },
            { url : "https://static.inaturalist.org/photos/53630538/large.jpg?1570595458" },
            { url : "https://static.inaturalist.org/photos/59206525/large.jpg?1578361202" }
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
            "Shell is square but with quite curved forward corners.",
            "Shell has two teeth like spikes on each side.",
            "Legs can appear quite furry.",
            "Coluring variable; Can be green, brown, reddish, largly white. Often has large spots or mottling."
        ],
        similarTo: [
            { key: "Hemigrapsus sexdentatus", label: "Common Rock Crab" },
            { key: "Austrohelice crassa", label: "Tunneling Mud Crab" }, 
            { key: "Cyclograpsus lavauxi", label: "Smooth Shore Crab" } 
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/29603233/large.jpeg?1545974351" },
            { url : "https://static.inaturalist.org/photos/54043686/large.jpg?1571033389" },
            { url : "https://static.inaturalist.org/photos/53457943/large.jpg?1570427996" },
            { url : "https://static.inaturalist.org/photos/41041942/large.jpg?1559726126" }
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
            "Shell is oval but not much wider than long.",
            "Shell has large, smooth bumps; resembles a sponge.",
            "Shell has no teeth like spikes on each side.",
            "Inner areas of claws can appear a bit furry.",
            "Coluring red or reddish brown."
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
            "Shell is triangle shaped.",
            "Shell can be bumpy or covered in 'hairs'/sedmients.",
            "Can appear furry/muddy due to a covering of 'hairs'.",
            "Coluring light green/brown."
        ],
        similarTo: [
            { key: "Notomithrax minor", label: "Small Decorator Crab" },
            { key: "Notomithrax peronii", label: "Peron's Decorator Crab" },
            { key: "Notomithrax ursus", label: "Hairy Seaweed Crab" }
        ],
        images : [ 
            { url : "https://static.inaturalist.org/photos/53457693/large.jpg?1570427581" },
            { url : "https://static.inaturalist.org/photos/53457700/large.jpg?1570427590" }
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
            "Shell is squarish, but has rounded sides.",
            "Shell sides are smooth, with no teeth like spikes.",
            "The first leg pairs have a set of spikes where they join with the body.",
            "Often found on or around objects that have been floating in the ocean.",
            "Coluring very variable; can be blue, dark brown, almost black, yellow brown."
        ],
        similarTo: [
            { key: "Cyclograpsus lavauxi", label: "Smooth Shore Crab" } 
        ],
        images : [ 
            { url : "https://static.inaturalist.org/photos/64201398/large.jpg?1584864956" },
            { url : "https://static.inaturalist.org/photos/64201441/large.jpg?1584865001" },
            { url : "https://static.inaturalist.org/photos/64201454/large.jpg?1584865022" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/295349-Planes-minutus"
    }
]