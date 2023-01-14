var crabData = [
    {
        commonName : "Purple Rock Crab",
        scientificName : "Leptograpsus variegatus",
        aka : ["Swift Footed Shore Crab", "Purple Ninja Crab", "Large Shore Crab"],
        attributes : [
            { key: "carapaceShape" , values : ["square","round"] },
            { key: "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["smooth","bumpy"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] },
            { key: "pillboxCrab", values : ["false"] },
            { key: "sideNotches", values : ["true"] },
            { key: "rectangleShaped", values : ["false"] }
        ],
        details : [
            { text: "Shell squarish; Sides can sometimes appear quite rounded."},
            { text: "Shell has two teeth/spikes on each side behind the eyes.", references: [2]},
            { text: "Shell can reach 3 inches (78mm) across.", references: [1, 2]},
            { text: "Shell is smooth with no hair or seaweed attached."},
            { text: "Intertidal. Generally found higher on the beach, in rocky gaps. Often on top of rocks until startled."},
            { text: "Colouring variable but mostly purple with some white. Juveniles can be darker, almost black."},
            { text: "When dead the shells can turn to a red colour."},
            { text: "The <b>claws of adults are purple with white dots</b> (almost bumps) - this is unlike any other crab."}
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
        natureWatchLink: "https://inaturalist.nz/taxa/326099-Leptograpsus-variegatus",
        references : [
            { id: 1, detail : "Morton, J., Miller, M. (1973) The New Zealand Sea Shore (pp89). Collins, London 1973" },
            { id: 2, detail : "McLay, C.L. (1988) Brachyura and crab-like anomura of New Zealand (pp267-268).  Leigh Laboratory Bulletin, 22. (1988)" }
        ]
    },
    {
        commonName : "Common Rock Crab",
        scientificName : "Hemigrapsus sexdentatus",
        aka : ["Purple Rock Crab (there is another crab by this name)"],
        attributes : [
            { key: "carapaceShape" , values : ["square", "round"] },
            { key: "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["smooth"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] },
            { key: "pillboxCrab", values : ["false"] },
            { key: "sideNotches", values : ["true"] },
            { key: "rectangleShaped", values : ["false"] }
        ],
        details : [
            { text: "Shell is squarish, slightly wider than long."},
            { text: "Shell has two teeth/spikes on each side behind the eyes."},
            { text: "Shell can be up to 57mm wide.", references : [2]},
            { text: "Shell is smooth with no hair or seaweed attached."},
            { text: "Intertidal between high and mid-tide.", references : [2] },
            { text: "Usually under rocks, likes relatively sheltered shores.", references : [2] },
            { text: "Colouring variable, often pale (especially underneath) with dark red or purple marbling.", references : [1]},
            { text: "Looks very similar to the Purple Rock Crab, but this crab does NOT have white dots on the claws."}
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
        natureWatchLink: "https://inaturalist.nz/taxa/410820-Hemigrapsus-sexdentatus",
        references : [
            { id: 1, detail : "Morton, J., Miller, M. (1973) The New Zealand Sea Shore (pp89). Collins, London 1973" },
            { id: 2, detail : "McLay, C.L. (1988) Brachyura and crab-like anomura of New Zealand (pp281-282).  Leigh Laboratory Bulletin, 22. (1988)" }
        ]
    },
    {
        commonName : "Hairy-Handed Crab",
        scientificName : "Hemigrapsus crenulatus",
        attributes : [ 
            { key: "carapaceShape", values : ["square", "oval"] },
            { key: "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["smooth"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] },
            { key: "sideNotches", values : ["true"] },
            { key: "rectangleShaped", values : ["false"] }
        ],
        details : [
            { text: "Shell is square, slightly wider than long, with quite curved forward corners."},
            { text: "Shell has two (small & blunt) teeth like spikes on each side behind the eyes.", references: [2]},
            { text: "Shell can be up to 37.5mm wide.", references: [2]},
            { text: "<b>Legs can appear quite hairy/furry.</b>"},
            { text: "Found from mid-tide to below low-tide", references: [2]},
            { text: "Can be found under stones but also burrows; prefers to be sheltered (e.g. estuaries).", references: [2]},
            { text: "Colouring variable; <b>Often green, can have brown, reddish/purple, marks or blotches</b>. Often has large spots or mottling.", references: [1]}
        ],
        similarTo: [
            { key: "Hemigrapsus sexdentatus", label: "Common Rock Crab" },
            { key: "Austrohelice crassa", label: "Tunneling Mud Crab" }, 
            { key: "Cyclograpsus lavauxi", label: "Smooth Shore Crab" } 
        ],
        images : [
            // { url : "images/crabs/hairyhandedcrab01.gif" },
            { url : "images/crabs/hairyhandedcrab05.jpg" },
            { url : "images/crabs/hairyhandedcrab06.jpg" },
            { url : "images/crabs/hairyhandedcrab01.jpg" },
            { url : "images/crabs/hairyhandedcrab02.jpg" },
            { url : "images/crabs/hairyhandedcrab03.jpg" },
            { url : "images/crabs/hairyhandedcrab04.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/143936-Hemigrapsus-crenulatus",
        references : [
            { id: 1, detail : "Morton, J., Miller, M. (1973) The New Zealand Sea Shore (pp89). Collins, London 1973" },
            { id: 2, detail : "McLay, C.L. (1988) Brachyura and crab-like anomura of New Zealand (pp287-289).  Leigh Laboratory Bulletin, 22. (1988)" }
        ]
    },
    {
        commonName : "Smooth Shore Crab",
        scientificName : "Cyclograpsus lavauxi",
        attributes : [
            { key : "carapaceShape", values : ["square"] },
            { key : "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["smooth"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] },
            { key : "sideNotches", values : ["false"] },
            { key : "rectangleShaped", values : ["false"] }
        ],
        details : [
            { text: "Shell is square/rectangle shapped, wider than long."},
            { text: "Shell sides are smooth, with <b>no teeth like spikes behind the eyes</b>."},
            { text: "Shell can be up to 28mm across.", references : [2]},
            { text: "Shell is smooth with no hair or seaweed attached."},
            { text: "Found under stones & boulders around the high tide line, does not like much water.", references : [1]},
            { text: "Colouring varies; often reddish-brown with grey speckles, can be whitish with dark spots/mottling.", references : [1]}
        ],
        similarTo: [
            { key: "Hemigrapsus sexdentatus", label: "Common Rock Crab" },
            { key: "Hemigrapsus crenulatus", label: "Hairy-handed Crab" },
            { key: "Planes minutus", label: "Gulfweed Crab" }
        ],
        images : [
            // { url : "images/crabs/smoothshorecrab01.gif" },
            { url : "images/crabs/smoothshorecrab04.jpg" },
            { url : "images/crabs/smoothshorecrab01.jpg" },
            { url : "images/crabs/smoothshorecrab02.jpg" },
            { url : "images/crabs/smoothshorecrab03.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/410426-Cyclograpsus-lavauxi",
        references : [
            { id: 1, detail : "Morton, J., Miller, M. (1973) The New Zealand Sea Shore (pp88). Collins, London 1973" },
            { id: 2, detail : "McLay, C.L. (1988) Brachyura and crab-like anomura of New Zealand (pp310-312).  Leigh Laboratory Bulletin, 22. (1988)" }
        ]
    },
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
            { text: "Shell round, slightly longer than wide."},
            { text: "Shell very smooth and flat with no teeth/spikes on side."},
            { text: "Shell can be up to 16mm long.", references: [2]},
            { text: "Shell is smooth with no hair or seaweed attached."},
            { text: "Found from hide-tide to just below low-tide.", references: [2]},
            { text: "Very common, found beneath rocks, mussels or other objects.", references: [2]},
            { text: "Often <b>green</b>, but has a wide range of colours."},
            { text: "Has long wipe-like anntennae.", references: [1]},
            { text: "Only 6 walking legs - unlike true crabs."},
            { text: "Claws very flat and smooth."}
        ],
        similarTo: [
            { key: "Petrolisthes novaezelandiae", label: "Red Half-Crab" },
            { key: "Petrocheles spinosus", label: "Spiny False Crab" }
        ],
        images : [
            // { url : "images/crabs/nzhalfcrab01.gif" },
            { url : "images/crabs/nzhalfcrab01.jpg" },
            { url : "images/crabs/nzhalfcrab02.jpg" },
            { url : "images/crabs/nzhalfcrab03.jpg" },
            { url : "images/crabs/nzhalfcrab04.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/410371-Petrolisthes-elongatus",
        references : [
            { id: 1, detail : "Morton, J., Miller, M. (1973) The New Zealand Sea Shore (pp93). Collins, London 1973" },
            { id: 2, detail : "McLay, C.L. (1988) Brachyura and crab-like anomura of New Zealand (pp52-54).  Leigh Laboratory Bulletin, 22. (1988)" }
        ]
    },
    {
        commonName : "Red Half-Crab",
        scientificName : "Petrolisthes novaezelandiae",
        attributes : [
            { key: "carapaceShape" , values : ["triangle", "round"] },
            { key: "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["smooth","hairy"]},
            { key: "halfCrab", values : ["true"]},
            { key: "camouflageCrab", values : ["false"] },
            { key: "pillboxCrab", values : ["false"] }
        ],
        details : [
            { text: "Shell round, slightly wider than long."},
            { text: "Shell is flat and has no teeth/spikes on side."},
            { text: "Shell can be up to 12.5mm long.", references: [3]},
            { text: "Shell can be smooth but may also have fine hairs and appear fuzzy."},
            { text: "Found intertidally, under rocks.", references: [3]},
            { text: "Colouring for<b> males is redish. Females are greyish/brown with red spots/patches</b>.", references: [3]},
            { text: "Has long wipe-like anntennae.", references: [1]},
            { text: "Only 6 walking legs - unlike true crabs."},
            { text: "Claws flat but with a ridge running along the upper surface.", references: [2]}
        ],
        similarTo: [
            { key: "Petrolisthes elongatus", label: "New Zealand Half-Crab" },
            { key: "Petrocheles spinosus", label: "Spiny False Crab" }
        ],
        images : [
            { url : "images/crabs/redhalfcrab05.jpg" },
            { url : "images/crabs/redhalfcrab04.jpg" },
            { url : "images/crabs/redhalfcrab02.jpg" },
            { url : "images/crabs/redhalfcrab03.jpg" },
            { url : "images/crabs/redhalfcrab01.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/471708-Petrolisthes-novaezelandiae",
        references : [
            { id: 1, detail : "Morton, J., Miller, M. (1973) The New Zealand Sea Shore (pp94). Collins, London 1973" },
            { id: 2, detail : "Wilkens, S. L., Ahyong, S. T (2015) Coastal Crabs a guide to the crabs of New Zealand Version 1, 2015 (pp12). NIWA" },
            { id: 3, detail : "McLay, C.L. (1988) Brachyura and crab-like anomura of New Zealand (pp61-63).  Leigh Laboratory Bulletin, 22. (1988)" }
        ]
    },
    {
        commonName : "Spiny False Crab",
        scientificName : "Petrocheles spinosus",
        attributes : [
            { key: "carapaceShape" , values : ["triangle", "round"] },
            { key: "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["smooth"]},
            { key: "halfCrab", values : ["true"]},
            { key: "camouflageCrab", values : ["false"] },
            { key: "pillboxCrab", values : ["false"] }
        ],
        details : [
            { text: "Shell round."},
            { text: "Shell is flat and has tiny teeth on each side which may not be visible."},
            { text: "Shell can be up to 11.5mm long.", references: [1]},
            { text: "Shell is smooth, legs may be hairy and appear fuzzy."},
            { text: "Found intertidally to 100m.", references: [1]},
            { text: "Found on mud, shingle or under rocks.", references: [1]},
            { text: "Colouring can be greyish, or light yellow, brown or red.", references: [1]},
            { text: "Has long wipe-like anntennae."},
            { text: "Only 6 walking legs - unlike true crabs."},
            { text: "<b>The inside of the arms have a row of small spines.</b>"}
        ],
        similarTo: [
            { key: "Petrolisthes elongatus", label: "New Zealand Half-Crab" },
            { key: "Petrolisthes novaezelandiae", label: "Red Half-Crab" }
        ],
        images : [
            { url : "images/crabs/petrochelesspinosus03.jpg" },
            { url : "images/crabs/petrochelesspinosus02.jpg" },
            { url : "images/crabs/petrochelesspinosus01.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/471056-Petrocheles-spinosus",
        references : [
            { id: 1, detail : "McLay, C.L. (1988) Brachyura and crab-like anomura of New Zealand (pp64-66).  Leigh Laboratory Bulletin, 22. (1988)" }
        ]
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
            { key : "pillboxCrab", values : ["false"] },
            { key : "sideNotches", values : ["true"] },
            { key : "rectangleShaped", values : ["false"] }
        ],
        details : [
            { text: "Shell could be seen as either round or square shapped."},
            { text: "Shell front and sides have jagged spikes."},
            { text: "Shell can be up to 75mm long.", references: [1]},
            { text: "Shell surface is smooth with no hairs or seaweed attached."},
            { text: "Found around low tide to 25m.", references: [1]},
            { text: "Found usually in water, under rocks or ledges.", references: [1]},
            { text: "Colouring is red/orange with white underneath."},
            { text: "<b>Claws have ridges of white bumps.</b>"}
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
        natureWatchLink: "https://inaturalist.nz/taxa/319553-Guinusia-chabrus",
        references : [
            { id: 1, detail : "McLay, C.L. (1988) Brachyura and crab-like anomura of New Zealand (pp272-274).  Leigh Laboratory Bulletin, 22. (1988)" }
        ]
    },
    {
        commonName : "Tunneling Mud Crab",
        scientificName : "Austrohelice crassa",
        aka : ["Burrowing Mud Crab"],
        attributes : [
            { key: "carapaceShape", values : ["square"] },
            { key: "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["smooth"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] },
            { key: "sideNotches", values : ["true"] },
            { key: "rectangleShaped", values : ["true"] }
        ],
        details : [
            { text: "Shell is <b>square/rectangle shaped, wider than long</b>."},
            { text: "Shell has two teeth/spikes on each side behind the eyes."},
            { text: "Shell can be up to 26mm wide in the south of NZ but more like 21.7mm in the north.", references: [1]},
            { text: "Shell is smooth with no hair or seaweed attached."},
            { text: "Found in the upper intertidal region.", references: [1]},
            { text: "Builds tunnels in sheltered areas such as habours, estuaries and magrove swamps.", references: [1]},
            { text: "Colouring ranges from olive-green, grey to brown. Claws may have bright orange at joints.", references: [1]},
            { text: "<b>The parts of the claws that do the pinching are more-or-less straight and do not noticably angle downwards.</b>"}
        ],
        similarTo: [
            { key: "Hemiplax hirtipes", label: "Sentinel Crab" },
            { key: "Hemigrapsus crenulatus", label: "Hairy-handed Crab" }
        ],
        images : [
            { url : "images/crabs/tunnelingmudcrab03.jpg" },
            { url : "images/crabs/tunnelingmudcrab05.jpg" },
            { url : "images/crabs/tunnelingmudcrab07.jpg" },
            { url : "images/crabs/tunnelingmudcrab08.jpg" },
            { url : "images/crabs/tunnelingmudcrab06.jpg" },
            { url : "images/crabs/tunnelingmudcrab04.jpg" },
            { url : "images/crabs/tunnelingmudcrab01.jpg" },
            { url : "images/crabs/tunnelingmudcrab02.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/121373-Austrohelice-crassa",
        references : [
            { id: 1, detail : "McLay, C.L. (1988) Brachyura and crab-like anomura of New Zealand (pp294-296).  Leigh Laboratory Bulletin, 22. (1988)" }
        ]
    },
    {
        commonName : "Sentinel Crab",
        scientificName : "Hemiplax hirtipes",
        aka : ["Stalk-eyed Mud Crab"],
        attributes : [
            { key: "carapaceShape", values : ["square"] },
            { key: "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["smooth","hairy"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] },
            { key: "sideNotches", values : ["true"] },
            { key: "rectangleShaped", values : ["true"] }
        ],
        details : [
            { text: "Shell is <b>square/rectangle shaped, much wider than long</b>.", references: [1]},
            { text: "Shell has two teeth/spikes on each side behind the eyes."},
            { text: "Shell can be up to 30.2mm wide.", references: [1]},
            { text: "Shell is smooth but legs and claws have hairs which can give them a furry appearance."},
            { text: "Found in the intertidal region to 13m.", references: [1]},
            { text: "Builds tunnels in the lower regions of mud flats and estuaries.", references: [1]},
            { text: "Colouring can be light brown/orange with dark spots."},
            { text: "<b>The parts of the claws that do the pinching angle downwards noticably, giving the claws a bent shape.</b>"}
        ],
        similarTo: [
            { key: "Austrohelice crassa", label: "Burrowing Mud Crab" }
        ],
        images : [
            // { url : "images/crabs/sentinelcrab01.jpg" },
            // { url : "images/crabs/sentinelcrab02.jpg" },
            // { url : "images/crabs/sentinelcrab03.jpg" },
            { url : "images/crabs/sentinelcrab04.jpg" },
            { url : "images/crabs/sentinelcrab05.jpg" },
            { url : "images/crabs/sentinelcrab07.jpg" },
            { url : "images/crabs/sentinelcrab01.jpg" },
            { url : "images/crabs/sentinelcrab06.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/416671-Hemiplax-hirtipes",
        references : [
            { id: 1, detail : "McLay, C.L. (1988) Brachyura and crab-like anomura of New Zealand (pp336-338).  Leigh Laboratory Bulletin, 22. (1988)" }
        ]
    },
    {
        commonName : "Iron Crab",
        aka : ["Previously thought to be the Black Finger Crab"],
        scientificName : "Ozius deplanatus",
        attributes : [
            { key: "carapaceShape", values : ["oval"] },
            { key: "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["smooth"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] }
        ],
        details : [
            { text: "Shell is oval shapped; wider than long, with the front very wide."},
            { text: "Shell has <b>no noticable teeth on the sides, but the front of the shell has blunt outward facing bumps.</b>"},
            { text: "Shell is smooth, legs are slightly hairy.", references : [1]},
            { text: "Shell can be up to 57mm wide.", references: [2]},
            { text: "Found in the intertidal region underneath rocks.", references: [2]},
            { text: "Colouring is <b>dark chocolate-brown</b> but much lighter if newly moulted. <b>Claw tips are black</b>.", references: [2]},
            { text: "When disturbed it often raises both claws facing them up and out."}
        ],
        similarTo: [
            { key: "Heterozius rotundifrons", label: "Big Hand Crab" },
            { key: "Pilumnopeus serratifrons", label: "Smooth-Handed Crab" }
        ],
        images : [
            // { url : "images/crabs/ironcrab01.gif" },
            { url : "images/crabs/ironcrab06.jpg" },
            { url : "images/crabs/ironcrab01.jpg" },
            { url : "images/crabs/ironcrab02.jpg" },
            { url : "images/crabs/ironcrab03.jpg" },
            { url : "images/crabs/ironcrab04.jpg" },
            { url : "images/crabs/ironcrab05.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/496210-Ozius-deplanatus",
        references : [
            { id: 1, detail : "Morton, J., Miller, M. (1973) The New Zealand Sea Shore (pp90). Collins, London 1973" },
            { id: 2, detail : "McLay, C.L. (1988) Brachyura and crab-like anomura of New Zealand (pp334-336).  Leigh Laboratory Bulletin, 22. (1988)" }
        ]
    },
    {
        commonName : "Pie Crust Crab",
        scientificName : "Metacarcinus novaezelandiae",
        attributes : [
            { key: "carapaceShape" , values : ["oval"] },
            { key: "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["smooth"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] }
        ],
        details : [
            { text: "Shell is oval shapped; much wider than long."},
            { text: "Shell has no teeth/spikes on side and is broadly rounded. The <b>front of the shell looks like the pushed together pastry of a pie</b>.", references: [1]},
            { text: "Shell can be up to 150mm across.", references: [1]},
            { text: "Shell is smooth with no hair or seaweed attached, legs can be slightly hairy.", references: [2]},
            { text: "Found intertial to ?40m", references: [2]},
            { text: "Found under stones in seaweed. Adults usually in deeper water with a sandy bottom.", references: [2]},
            { text: "Colouring can be a various shades of brown, grey or red, with white underside. Claw tips are black.", references: [1]} // todo check this reference
        ],
        similarTo: [
            { key: "Ozius deplanatus", label: "Iron Crab" },
            { key: "Pilumnopeus serratifrons", label: "Smooth-Handed Crab" },
            { key: "Pilumnus lumpinus", label: "Hairy Crab" },
            { key: "Heterozius rotundifrons", label: "Big-Handed Crab" }
        ],
        images : [
            { url : "images/crabs/piecrustcrab05.jpg" },
            { url : "images/crabs/piecrustcrab07.jpg" },
            { url : "images/crabs/piecrustcrab06.jpg" },
            { url : "images/crabs/piecrustcrab01.jpg" },
            { url : "images/crabs/piecrustcrab02.jpg" },
            { url : "images/crabs/piecrustcrab03.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/410433-Metacarcinus-novaezelandiae",
        references : [
            { id: 1, detail : "Morton, J., Miller, M. (1973) The New Zealand Sea Shore (pp90). Collins, London 1973" },
            { id: 2, detail : "McLay, C.L. (1988) Brachyura and crab-like anomura of New Zealand (pp190-193).  Leigh Laboratory Bulletin, 22. (1988)" }
        ]
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
            { text: "Shell is oval shapped; much wider than long."},
            { text: "Front of the shell wraps around the sides and has blunt outward facing bumps."},
            { text: "Shell can be up to 36mm across.", references: [2]},
            { text: "Shell can appear smooth or can appear furry/muddy, <b>legs are covered in hair and appear furry</b>."},
            { text: "Found intertidally", references: [2]},
            { text: "Found under stones (possibly on sandy beachs) or in burrows.", references: [2]},
            { text: "Colouring is dark brown, often discoloured by mud. The top of the claws are usually brown with the bottom being white. <b>Claw tips are dark brown</b>.", references: [1]}
        ],
        similarTo: [
            { key: "Ozius deplanatus", label: "Iron Crab" }
        ],
        images : [
            // { url : "images/crabs/smoothhandedcrab01.gif" },
            { url : "images/crabs/smoothhandedcrab06.jpg" },
            { url : "images/crabs/smoothhandedcrab09.jpg" },
            { url : "images/crabs/smoothhandedcrab05.jpg" },
            { url : "images/crabs/smoothhandedcrab07.jpg" },
            { url : "images/crabs/smoothhandedcrab08.jpg" },
            { url : "images/crabs/smoothhandedcrab01.jpg" },
            { url : "images/crabs/smoothhandedcrab02.jpg" },
            { url : "images/crabs/smoothhandedcrab03.jpg" },
            { url : "images/crabs/smoothhandedcrab04.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/471785-Pilumnopeus-serratifrons",
        references : [
            { id: 1, detail : "Morton, J., Miller, M. (1973) The New Zealand Sea Shore (pp91). Collins, London 1973" },
            { id: 2, detail : "McLay, C.L. (1988) Brachyura and crab-like anomura of New Zealand (pp240-243).  Leigh Laboratory Bulletin, 22. (1988)" }
        ]
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
            { text: "Shell is oval shapped; wider than long."},
            { text: "Shell has no teeth/spikes on each side."},
            { text: "Shell can be up to 23mm across.", references: [1]},
            { text: "Shell is smooth while legs can be a bit furry."},
            { text: "Found intertidally", references: [1]},
            { text: "Found under rocks in sand and gravel." , references: [1]},
            { text: "Colouring is <b>dull yellowish grey or green</b>. Tips of claws yellow.", references: [1]},
            { text: "Male has one large claw."}
        ],
        similarTo: [
            { key: "Ozius deplanatus", label: "Iron Crab" },
            { key: "Pilumnopeus serratifrons", label: "Smooth-Handed Crab" },
            { key: "Pilumnus lumpinus", label: "Hairy Crab" },
            { key: "Metacarcinus novaezelandiae", label: "Pie Crust Crab" }
        ],
        images : [
            // { url : "images/crabs/bighandcrab01.gif" },
            { url : "images/crabs/bighandcrab05.jpg" },
            { url : "images/crabs/bighandcrab01.jpg" },
            { url : "images/crabs/bighandcrab02.jpg" },
            { url : "images/crabs/bighandcrab03.jpg" },
            { url : "images/crabs/bighandcrab04.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/410714-Heterozius-rotundifrons",
        references : [
            { id: 1, detail : "McLay, C.L. (1988) Brachyura and crab-like anomura of New Zealand (pp252-254).  Leigh Laboratory Bulletin, 22. (1988)" }
        ]
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
            { text: "Shell is <b>triangular, with the widest edge at the back</b>.", references: [1]},
            { text: "Shell has four blunt outward facing teeth/spikes on each backend corner.", references: [2]},
            { text: "Shell can be up to 65mm across.", references: [2]},
            { text: "Shell is smooth with no hair or seaweed attached."},
            { text: "Found intertidally to 40m", references: [2]},
            { text: "Found under boulders on rocky and muddy shores.", references: [2]},
            { text: "Colour range variable; brown, white, red."}
        ],
        similarTo: [],
        images : [
            // { url : "images/crabs/trianglecrab01.gif" },
            { url : "images/crabs/trianglecrab05.jpg" },
            { url : "images/crabs/trianglecrab02.jpg" },
            { url : "images/crabs/trianglecrab06.jpg" },
            { url : "images/crabs/trianglecrab01.jpg" },
            { url : "images/crabs/trianglecrab03.jpg" },
            { url : "images/crabs/trianglecrab04.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/424825-Eurynolambrus-australis",
        references : [
            { id: 1, detail : "Morton, J., Miller, M. (1973) The New Zealand Sea Shore (pp92). Collins, London 1973" },
            { id: 2, detail : "McLay, C.L. (1988) Brachyura and crab-like anomura of New Zealand (pp124-126).  Leigh Laboratory Bulletin, 22. (1988)" }
        ]
    },
    {
        commonName : "Hairy Seaweed Crab",
        scientificName : "Notomithrax ursus",
        attributes : [
            { key: "carapaceShape", values : ["triangle"] },
            { key: "covering", values : ["seaweed"] },
            { key: "camouflageCrab", values : ["true"] },
            { key: "posteriorSpines", values : ["false"] },
            { key: "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["spikey","seaweed", "hairy"]},
            { key: "halfCrab", values : ["false"]}
        ],
        details : [
            { text: "Shell is triangular with a rounded base (pear shaped)."},
            { text: "Shell has 9 short spikes on each side."},
            { text: "Shell can be up to 60mm long.", references: [2]},
            { text: "The surface of the shell will feel spikey and probably be covered in seaweed or short hooked hairs."},
            { text: "Intertial to 75m.", references: [2]},
            { text: "Found on rocky shores or rock pools.", references: [2]},
            { text: "Shell is orange, <b>claws dark orange/purple.</b>"},
            { text: "<b>Shell does not have two spines/spikes at the rear</b>."}
        ],
        similarTo: [
            { key: "Notomithrax minor", label: "Small Decorator Crab" },
            { key: "Notomithrax peronii", label: "Peron's Decorator Crab" }
        ],
        images : [
            // { url : "images/crabs/hairyseaweedcrab01.gif" },
            { url : "images/crabs/hairyseaweedcrab04.jpg" },    // shows the claws
            { url : "images/crabs/hairyseaweedcrab01.jpg" },
           // { url : "images/crabs/hairyseaweedcrab02.jpg" },
            { url : "images/crabs/hairyseaweedcrab03.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/410681-Notomithrax-ursus",
        references : [
            { id: 1, detail : "Morton, J., Miller, M. (1973) The New Zealand Sea Shore (pp92). Collins, London 1973" },
            { id: 2, detail : "McLay, C.L. (1988) Brachyura and crab-like anomura of New Zealand (pp142-144).  Leigh Laboratory Bulletin, 22. (1988)" }
        ]
    },
    {
        commonName : "Peron's Camouflage Crab",
        aka: ["Peron's Decorator Crab"],
        scientificName : "Notomithrax peronii",
        attributes : [
            { key: "carapaceShape", values : ["triangle"] },
            { key: "covering", values : ["seaweed"] },
            { key: "camouflageCrab", values : ["true"] },
            { key: "posteriorSpines", values : ["true"] },
            { key: "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["spikey","seaweed"]},
            { key: "halfCrab", values : ["false"]}
        ],
        details : [
            { text: "Shell is triangular with a rounded base (pear shaped)."},
            { text: "Shell has 10 short spikes on each side."},
            { text: "Shell can be up to 77mm long.", references: [2]},
            { text: "The surface of the shell will feel spikey and probably be covered in seaweed or short hooked hairs."},
            { text: "Intertial to 50m.", references: [2]},
            { text: "Found on rocky shores or rock pools but also sand or mud.", references: [2]},
            { text: "Shell is probably a light orange, <b>claws olive green, sometimes mixed with a reddish brown.</b>"},
            { text: "<b>Shell has two very small spines/spikes at the rear.</b>"}
        ],
        similarTo: [
            { key: "Notomithrax minor", label: "Small Decorator Crab" },
            { key: "Notomithrax ursus", label: "Hairy Seaweed Crab" }
        ],
        images : [
            { url : "images/crabs/peronscamouflagecrab03.jpg" }, // shows the claws
            { url : "images/crabs/peronscamouflagecrab01.jpg" },
            { url : "images/crabs/peronscamouflagecrab02.jpg" },
            { url : "images/crabs/peronscamouflagecrab04.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/410683-Notomithrax-peronii",
        references : [
            { id: 1, detail : "Morton, J., Miller, M. (1973) The New Zealand Sea Shore (pp92). Collins, London 1973" },
            { id: 2, detail : "McLay, C.L. (1988) Brachyura and crab-like anomura of New Zealand (pp138-140).  Leigh Laboratory Bulletin, 22. (1988)" }
        ]
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
            { text: "Shell is triangular with a rounded base (pear shaped)."},
            { text: "Shell has 12 short spikes on each side."},
            { text: "Shell can be up to 40mm long.", references: [1]},
            { text: "The surface of the shell will feel spikey and probably be covered in seaweed or short hooked hairs."},
            { text: "Intertial to 35m.", references: [1]},
            { text: "Found on rocky shores or sandy, muddy or coarse shell bottoms.", references: [1]},
            { text: "Shell pale yellowish, <b>claws white with bluish markings sometimes mixed with a light brown.</b>", references: [1]},
            { text: "<b>Shell does not have two spines/spikes at the rear</b>."}
        ],
        similarTo: [
            { key: "Notomithrax peronii", label: "Peron's Decorator Crab" },
            { key: "Notomithrax ursus", label: "Hairy Seaweed Crab" }
        ],
        images : [
            { url : "images/crabs/smalldecoratorcrab03.jpg" }, // shows the claws
            { url : "images/crabs/smalldecoratorcrab02.jpg" },
            { url : "images/crabs/smalldecoratorcrab01.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/410680-Notomithrax-minor",
        references : [
            { id: 1, detail : "McLay, C.L. (1988) Brachyura and crab-like anomura of New Zealand (pp134-136).  Leigh Laboratory Bulletin, 22. (1988)" }
        ]
    },
    {
        commonName : "Paddle Crab",
        scientificName : "Ovalipes catharus",
        attributes : [
            { key: "carapaceShape", values : ["oval"] },
            { key: "lastLegsArePaddles", values : ["true"] },
            { key: "surfaceTexture", values : ["smooth"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] }
        ],
        details : [
            { text: "Shell is oval shapped, wider than long."},
            { text: "Shell has <b>five teeth/spikes on each side behind the eyes, with four spikes between the eyes</b>."},
            { text: "Shell can be up to 150mm wide.", references: [1]},
            { text: "Shell is smooth with no hair or seaweed attached."},
            { text: "Found in the surf zone and continental shelf from 2m - 100m", references: [1]},
            { text: "Found on sandy beaches or estuaries.", references: [1]},
            { text: "Colouring is light brown with dark spots, can have redish/orange areas. Paddles can be a bluish colour."},
            { text: "Last leg pair has paddles."}
        ],
        similarTo: [
            { key: "Charybdis japonica", label: "Asian Paddle Crab" }
        ],
        images : [
            { url : "images/crabs/paddlecrab06.jpg" },
            { url : "images/crabs/paddlecrab05.jpg" },
            { url : "images/crabs/paddlecrab04.jpg" },
            { url : "images/crabs/paddlecrab01.jpg" },
            { url : "images/crabs/paddlecrab02.jpg" },
            { url : "images/crabs/paddlecrab03.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/144096-Ovalipes-catharus",
        references : [
            { id: 1, detail : "McLay, C.L. (1988) Brachyura and crab-like anomura of New Zealand (pp200-202).  Leigh Laboratory Bulletin, 22. (1988)" }
        ]
    },
    {
        commonName : "Asian Paddle Crab",
        scientificName : "Charybdis japonica",
        attributes : [
            { key: "carapaceShape", values : ["oval"] },
            { key: "lastLegsArePaddles", values : ["true"] },
            { key: "surfaceTexture", values : ["smooth", "bumpy"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] }
        ],
        details : [
            { text: "Shell is oval shapped, wider than long."}, // todo how big can this one get?
            { text: "Shell has <b>five teeth/spikes on each side behind the eyes, with eight spikes between the eyes</b>."},
            { text: "Shell is smooth with no hair or seaweed attached."},
            { text: "Found intertidally to 15m", references: [1]},
            { text: "Found on sheltered muddy beaches. Currently only found around Auckland on the east coast.", references: [1]},
            { text: "Colouring is olive green. Underside of the front of the shell can have light blue markings."},
            { text: "Last leg pair has paddles."}
        ],
        similarTo: [
            { key: "Ovalipes catharus", label: "Paddle Crab" }
        ],
        images : [
            { url : "images/crabs/asianpaddlecrab07.jpg" },
            { url : "images/crabs/asianpaddlecrab06.jpg" },
            { url : "images/crabs/asianpaddlecrab05.jpg" },
            { url : "images/crabs/asianpaddlecrab02.jpg" },
            { url : "images/crabs/asianpaddlecrab04.jpg" },
            { url : "images/crabs/asianpaddlecrab03.jpg" },
            { url : "images/crabs/asianpaddlecrab01.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/209010-Charybdis-japonica",
        references : [
            { id: 1, detail : "Wilkens, S. L., Ahyong, S. T (2015) Coastal Crabs a guide to the crabs of New Zealand Version 1, 2015 (pp39). NIWA." },
        ]
    },
    {
        commonName : "Red Swimming Crab",
        aka : ["Hairy Red Swimming Crab"],
        scientificName : "Nectocarcinus antarcticus",
        attributes : [
            { key: "carapaceShape", values : ["square", "oval"] },
            { key: "lastLegsArePaddles", values : ["true"] },
            { key: "surfaceTexture", values : ["bumpy"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] },
            { key: "sideNotches", values : ["true"] },
            { key: "rectangleShaped", values : ["false"] }
        ],
        details : [
            { text: "Shell is oval shapped."},
            { text: "Shell has three teeth/spikes on each side behind the eyes.", references: [1]},
            { text: "Shell can be up to 87mm wide.", references: [1]},
            { text: "Shell is smooth with no hair or seaweed attached."},
            { text: "Found from 0 - 550m", references: [1]},
            { text: "Found on sandy, gravel, mud and shell bottoms.", references: [1]},
            { text: "Colouring is red, whitish and oranges. End of claws are dark red."},
            { text: "<b>Last leg pair has paddles.</b>"}
        ],
        similarTo: [
            { key: "Guinusia chabrus", label: "Red Rock Crab " }
        ],
        images : [
            { url : "images/crabs/redswimmingcrab05.jpg" },
            { url : "images/crabs/redswimmingcrab06.jpg" },
            { url : "images/crabs/redswimmingcrab07.jpg" },
            { url : "images/crabs/redswimmingcrab01.jpg" },
            { url : "images/crabs/redswimmingcrab04.jpg" },
            { url : "images/crabs/redswimmingcrab02.jpg" },
            { url : "images/crabs/redswimmingcrab03.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/471041-Nectocarcinus-antarcticus",
        references : [
            { id: 1, detail : "McLay, C.L. (1988) Brachyura and crab-like anomura of New Zealand (pp220-222).  Leigh Laboratory Bulletin, 22. (1988)" }
        ]
    },
    {
        commonName : "Gulfweed Crab",
        scientificName : "Planes minutus",
        aka : ["Pacific Weed Crab"],
        attributes : [ 
            { key : "carapaceShape", values : ["square","round"] },
            { key : "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["smooth"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] },
            { key : "pillboxCrab", values : ["false"] },
            { key : "sideNotches", values : ["false"] },
            { key : "rectangleShaped", values : ["false"] }
        ],
        details : [
            { text: "Shell is squarish, can be a little longer than wide OR a little wider than long, has rounded sides."},
            { text: "Shell has <b>no teeth/spikes on each side</b>, but does have shallow indents."},
            { text: "Shell can be up to 25mm long.", references: [1]},
            { text: "Shell is smooth with no hair or seaweed attached."},
            { text: "Found <b>floating on the ocean or washed up with debris</b>. Has been found on turtles.", references: [1]},
            { text: "Colouring very variable; can be blue, dark brown, almost black, yellow brown. May be able to change colour.", references: [1]},
            { text: "The legs holding the claws have a set of forward facing spikes at the just above the 'elbow'."}
        ],
        similarTo: [
            { key: "Cyclograpsus lavauxi", label: "Smooth Shore Crab" } 
        ],
        images : [ 
            // { url : "images/crabs/gulfweedcrab01.jpg" },
            // { url : "images/crabs/gulfweedcrab02.jpg" },
            // { url : "images/crabs/gulfweedcrab03.jpg" },
            { url : "images/crabs/gulfweedcrab04.jpg" },
            { url : "images/crabs/gulfweedcrab05.jpg" },
            { url : "images/crabs/gulfweedcrab07.jpg" },
            { url : "images/crabs/gulfweedcrab06.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/295349-Planes-minutus",
        references : [
            { id: 1, detail : "McLay, C.L. (1988) Brachyura and crab-like anomura of New Zealand (pp218-320).  Leigh Laboratory Bulletin, 22. (1988)" }
        ]
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
            { text: "Shell is as wide as long, but narrow in front. <b>A bulge between the eyes means the overall shape could be considered triangular.</b>"},
            { text: "Shell has no teeth/spike on each side."},
            { text: "Shell can be up to 17.8mm wide.", references: [1]},
            { text: "Shell is smooth and not furry."},
            { text: "Found in the lower intertidal zone.", references: [1]},
            { text: "Found under rocks or in coarse sand or pebbles. Often found in live paua shells.", references: [1]},
            { text: "Colour ranges through brown, white and purple; often red.", references: [1]}
        ],
        similarTo: [
            { key: "Halicarcinus cookii", label: "Cook's Pillbox Crab" },
            { key: "Halicarcinus innominatus", label: "Flat Pillbox Crab" },
            { key: "Halicarcinus varius", label: "Variable Pillbox Crab" },
            { key: "Halicarcinus whitei", label: "Estuarine Pillbox Crab" }  
        ],
        images : [
            // { url : "images/crabs/pauacrab01.gif" },
            { url : "images/crabs/pauacrab05.jpg" },
            { url : "images/crabs/pauacrab03.jpg" },
            { url : "images/crabs/pauacrab04.jpg" },
            { url : "images/crabs/pauacrab01.jpg" },
            { url : "images/crabs/pauacrab02.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/471049-Elamena-producta",
        references : [
            { id: 1, detail : "McLay, C.L. (1988) Brachyura and crab-like anomura of New Zealand (pp354-356).  Leigh Laboratory Bulletin, 22. (1988)" }
        ]
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
            { text: "Shell is overall round but <b>with flatish edges towards the front</b>."},
            { text: "Shell <b>has a small tooth/spike</b> on each side."},
            { text: "Shell can be up to 13mm wide.", references: [1]},
            { text: "Shell is smooth and not furry."},
            { text: "Found in the intertidal zone.", references: [1]},
            { text: "Found on rocky shores in seaweeds.", references: [1]},
            { text: "The <b>area between the eyes is about level with the eyes</b> and forms three points."},
            { text: "Colour range variable; black, brown, reddish yellow, green, white."}
        ],
        similarTo: [
            { key: "Halicarcinus innominatus", label: "Flat Pillbox Crab" },
            { key: "Halicarcinus varius", label: "Variable Pillbox Crab" },
            { key: "Halicarcinus whitei", label: "Estuarine Pillbox Crab" }  
        ],
        images : [
            { url : "images/crabs/cookspillboxcrab03.jpg" },
            { url : "images/crabs/cookspillboxcrab05.jpg" },
            { url : "images/crabs/cookspillboxcrab04.jpg" },
            { url : "images/crabs/cookspillboxcrab02.jpg" }
            //{ url : "images/crabs/cookspillboxcrab01.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/471078-Halicarcinus-cookii",
        references : [
            { id: 1, detail : "McLay, C.L. (1988) Brachyura and crab-like anomura of New Zealand (pp358-360).  Leigh Laboratory Bulletin, 22. (1988)" }
        ]
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
            { text: "Shell <b>does NOT have a small tooth/spike</b> on each side."},
            { text: "Shell can be up to 19mm wide.", references: [1]},
            { text: "Shell is smooth and not furry."},
            { text: "Found in the lower intertidal zone.", references: [1]},
            { text: "Found under rocks and among seaweeds, also on wharf piles and ship keels.", references: [1]},
            { text: "The <b>area between the eyes is about level with the eyes</b> and forms three points."},
            { text: "Colour range variable; often brown or white with mottling."}
        ],
        similarTo: [
            { key: "Halicarcinus cookii", label: "Cook's Pillbox Crab" },
            { key: "Halicarcinus varius", label: "Variable Pillbox Crab" },
            { key: "Halicarcinus whitei", label: "Estuarine Pillbox Crab" }  
        ],
        images : [
            // { url : "images/crabs/flatpillboxcrab01.gif" },
            { url : "images/crabs/flatpillboxcrab04.jpg" },
            { url : "images/crabs/flatpillboxcrab05.jpg" },
            { url : "images/crabs/flatpillboxcrab06.jpg" },
            { url : "images/crabs/flatpillboxcrab01.jpg" },
            { url : "images/crabs/flatpillboxcrab03.jpg" },
            { url : "images/crabs/flatpillboxcrab02.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/410832-Halicarcinus-innominatus",
        references : [
            { id: 1, detail : "McLay, C.L. (1988) Brachyura and crab-like anomura of New Zealand (pp362-364).  Leigh Laboratory Bulletin, 22. (1988)" }
        ]
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
            { text: "Shell is rounded, <b>with no flattened edges towards the front</b>.", references:[1]},
            { text: "Shell <b>has a small tooth/spike on each side</b>, which can be hard to see if the crab is furry."},
            { text: "Shell can be up to 10.4mm wide.", references: [2]},
            { text: "<b>Crab will probably appear slightly furry</b>, but can also be smooth."},
            { text: "Found from intertidal zone to 30m.", references: [2]},
            { text: "Found in sheltered areas on or under rocks or among algae.", references: [2]},
            { text: "The <b>area between the eyes is about level with the eyes</b> and forms three points (which may be hard to see)."},
            { text: "Colour is often brown or light green."}
        ],
        similarTo: [
            { key: "Halicarcinus cookii", label: "Cook's Pillbox Crab" },
            { key: "Halicarcinus innominatus", label: "Flat Pillbox Crab" },
            { key: "Halicarcinus whitei", label: "Estuarine Pillbox Crab" }  
        ],
        images : [
            // { url : "images/crabs/variablepillboxcrab01.jpg" },
            { url : "images/crabs/variablepillboxcrab04.jpg" },
            { url : "images/crabs/variablepillboxcrab03.jpg" },
            { url : "images/crabs/variablepillboxcrab02.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/416625-Halicarcinus-varius",
        references : [
            { id: 1, detail : "Wilkens, S. L., Ahyong, S. T (2015) Coastal Crabs a guide to the crabs of New Zealand Version 1, 2015 (pp21). NIWA." },
            { id: 2, detail : "McLay, C.L. (1988) Brachyura and crab-like anomura of New Zealand (pp376-378).  Leigh Laboratory Bulletin, 22. (1988)" }
        ]
    },
    {
        commonName : "Estuarine Pillbox Crab",
        aka: ["White's False Spider Crab"],
        scientificName : "Halicarcinus whitei",
        attributes : [
            { key: "carapaceShape", values : ["round"] },
            { key: "toothOnMargin", values : ["false"] },
            { key: "covering", values : ["setae"] },
            { key: "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["smooth", "hairy"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] },
            { key: "pillboxCrab", values : ["true"] }
        ],
        details : [
            { text: "Shell is rounded."},
            { text: "Shell <b>does NOT have a small tooth/spike</b> on each side."},
            { text: "Shell can be up to 12.5mm wide.", references: [1]},
            { text: "Shell <b>has a covering of hair and will appear furry</b>"},
            { text: "Found from intertidal, shallow water.", references: [1]},
            { text: "Found in sheltered open beaches, harbour flats or estuaries.", references: [1]},
            { text: "The <b>area between the eyes sticks out past the eye level</b> and forms three points."},
            { text: "Colour range variable; can be green, yellow, grey. Often light brown.", references: [1]}
        ],
        similarTo: [
            { key: "Halicarcinus cookii", label: "Cook's Pillbox Crab" },
            { key: "Halicarcinus innominatus", label: "Flat Pillbox Crab" },
            { key: "Halicarcinus varius", label: "Variable Pillbox Crab" },
            { key: "Neohymenicus pubescens", label: "Neohymenicus pubescens" } 
        ],
        images : [
            { url : "images/crabs/estuarinepillboxcrab02.jpg" },
            { url : "images/crabs/estuarinepillboxcrab03.jpg" },
            { url : "images/crabs/estuarinepillboxcrab04.jpg" },
            { url : "images/crabs/estuarinepillboxcrab05.jpg" },
            { url : "images/crabs/estuarinepillboxcrab01.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/471051-Halicarcinus-whitei",
        references : [
            { id: 1, detail : "McLay, C.L. (1988) Brachyura and crab-like anomura of New Zealand (pp380-382).  Leigh Laboratory Bulletin, 22. (1988)" }
        ]
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
            { text: "Shell does NOT have a small tooth/spike on each side, but it wouldn't be visible through the hair regardless." },
            { text: "Shell <b>can be up to 6.5mm wide</b> (i.e. it is always very small).", references: [1]},
            { text: "<b>Crab (shell and legs) is covered in hair and will appear very furry </b>or look muddy." },
            { text: "Found from intertidal to 10m.", references: [1]},
            { text: "Found under rocks or among weed.", references: [1]},
            { text: "The area between the eyes sticks out past the eye level."},
            { text: "Colouring is brown, perhaps muddy looking."}
        ],
        similarTo: [
            { key: "Halicarcinus cookii", label: "Cook's Pillbox Crab" },
            { key: "Halicarcinus innominatus", label: "Flat Pillbox Crab" },
            { key: "Halicarcinus varius", label: "Variable Pillbox Crab" },
            { key: "Halicarcinus whitei", label: "Estuarine Pillbox Crab" } 
        ],
        images : [
            // { url : "images/crabs/neopub01.gif" },
            { url : "images/crabs/neopub05.jpg" },
            { url : "images/crabs/neopub01.jpg" },
            { url : "images/crabs/neopub02.jpg" },
            { url : "images/crabs/neopub03.jpg" },
            { url : "images/crabs/neopub04.jpg"}
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/471492-Neohymenicus-pubescens",
        references : [
            { id: 1, detail : "McLay, C.L. (1988) Brachyura and crab-like anomura of New Zealand (pp390-392).  Leigh Laboratory Bulletin, 22. (1988)" }
        ]
    },
    {
        commonName : "Hairy Crab",
        scientificName : "Pilumnus lumpinus",
        attributes : [
            { key: "carapaceShape",  values : ["oval"] },
            { key: "covering", values : ["setae"] },
            { key: "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["hairy"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] }
        ],
        details : [
            { text: "Shell is oval shapped; noticably wider than long."},
            { text: "Shell has three teeth/spikes on each side behind the eyes but they will not be visible due to hairs."},
            { text: "Shell can be up to 22.5mm wide.", references: [2]},
            { text: "<b>Entire crab will appear furry/muddy due to being covered in very short hairs</b>."},
            { text: "Found lower intertidal.", references: [2]},
            { text: "Found on rocky shores under rocks or in crevices.", references: [2]},
            { text: "Colouring is grey or clay coloured due to covering of hairs. Claws have dark brown tips.", references:[1]}
        ],
        similarTo: [
            { key: "Pilumnus novaezelandiae", label: "Bristle Crab" }
        ],
        images : [
            // { url : "images/crabs/hairycrab01.gif" },
            { url : "images/crabs/hairycrab03.jpg" },
            { url : "images/crabs/hairycrab04.jpg" },
            { url : "images/crabs/hairycrab01.jpg" },
            { url : "images/crabs/hairycrab02.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/471043-Pilumnus-lumpinus",
        references : [
            { id: 1, detail : "Morton, J., Miller, M. (1973) The New Zealand Sea Shore (pp90-91). Collins, London 1973" },
            { id: 2, detail : "McLay, C.L. (1988) Brachyura and crab-like anomura of New Zealand (pp244-246).  Leigh Laboratory Bulletin, 22. (1988)" }
        ]
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
            { text: "Shell is oval shapped; noticably wider than long."},
            { text: "Shell has three teeth/spikes on each side behind the eyes but they will probably not be visible due to hairs."},
            { text: "Shell can be up to 20mm wide.", references: [2]},
            { text: "Shell is <b>sparsley covered in hair, some long and some short</b>. The back of the shell will probably be uncovered. The mixture of long and short hairs make the crab look ragged.", references: [2]},
            { text: "Found lower intertidal to 130m.", references: [2]},
            { text: "Found under rocks or in crevices.", references: [2]},
            { text: "Colouring beneath the hairs is pinkish grey, can look muddy brown. Claws have black or dark brown tips. Claws may be purplish on top, white underneath.", references: [1, 2]}
        ],
        similarTo: [
            { key: "Pilumnus lumpinus", label: "Hairy Crab" }
        ],
        images : [
            { url: "images/crabs/bristlecrab03.jpg" },
            { url: "images/crabs/bristlecrab04.jpg" },
            { url: "images/crabs/bristlecrab05.jpg" },
            { url: "images/crabs/bristlecrab06.jpg" },
            { url: "images/crabs/bristlecrab01.jpg" },
            { url: "images/crabs/bristlecrab02.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/471044-Pilumnus-novaezelandiae",
        references : [
            { id: 1, detail : "Morton, J., Miller, M. (1973) The New Zealand Sea Shore (pp91). Collins, London 1973" },
            { id: 2, detail : "McLay, C.L. (1988) Brachyura and crab-like anomura of New Zealand (pp248-250).  Leigh Laboratory Bulletin, 22. (1988)" }
        ]
    },
    {
        commonName : "Pea Crab",
        scientificName : "Nepinnotheres novaezelandiae",
        attributes : [
            { key: "carapaceShape",  values : ["round"] },
            { key: "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["smooth"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] },
            { key: "pillboxCrab", values : ["false"] }
        ],
        details : [
            { text: "Shell is round, <b>shapped like a pea</b>."},
            { text: "Shell has no teeth/spikes on each side behind the eyes."},
            { text: "Shell is up to 11.3mm wide.", references: [1]},
            { text: "Shell is smooth with no hair or seaweed attached."},
            { text: "Found intertidal to 30m.", references: [1]},
            { text: "Found inside shellfish, e.g. mussels.", references: [1]},
            { text: "Colouring variable; the shell may be creamy white all over, or orange-brown or mauve and yellow with white spots.", references: [1]},
        ],
        similarTo: [],
        images : [
            { url : "images/crabs/peacrab03.jpg" },
            { url : "images/crabs/peacrab04.jpg" },
            { url : "images/crabs/peacrab01.jpg" },
            { url : "images/crabs/peacrab02.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/472053-Nepinnotheres-novaezelandiae",
        references : [
            { id: 1, detail : "McLay, C.L. (1988) Brachyura and crab-like anomura of New Zealand (pp330-332).  Leigh Laboratory Bulletin, 22. (1988)" }
        ]
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
            { text: "Shell a lot wider than long. The <b>front corners of the shell end in outward facing triangular points</b>."},
            { text: "Shell has no teeth/spikes on each side behind the eyes."},
            { text: "Shell is up to 42mm wide.", references: [1]},
            { text: "Shell is smooth with no hair or seaweed attached."},
            { text: "Found 18 to 594m.", references: [1]},
            { text: "Found around soft sedmients with shells and rocks.", references: [1]},
            { text: "Colouring of the shell is mostly yellowish vermillion. Some areas of white, purple, red, brown."} // todo does this match obs on inat?
        ],
        similarTo: [],
        images : [
            { url : "images/crabs/policemancrab01.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/471045-Neommatocarcinus-huttoni",
        references : [
            { id: 1, detail : "McLay, C.L. (1988) Brachyura and crab-like anomura of New Zealand (pp262-264).  Leigh Laboratory Bulletin, 22. (1988)" }
        ]
    },
    {
        commonName : "Sponge Crab",
        scientificName : "Metadromia wilsoni",
        attributes : [ 
            { key: "carapaceShape", values : ["oval"] },
            { key: "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["bumpy"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] }
        ],
        details : [
            { text: "Shell is oval, wider than long."},
            { text: "Shell has 3 very blunt spikes on each side.", references: [1]},
            { text: "Shell is up to 70mm wide.", references: [1]},
            { text: "Shell has a shabby covering of dark hairs that may be hard to see and may be <b>hidden under a sponge carried on the shell</b>.", references: [1]},
            { text: "Found low intertidally and 0 to 190m.", references: [1]},
            { text: "Found under rocks but usually around sponges.", references: [1]},
            { text: "Colouring can be a light brown, red, reddish brown; the sponge on the crab's shell might be brighter.", references: [1]}
        ],
        similarTo: [],
        images : [
            { url : "images/crabs/spongecrab01.jpg" },
            { url : "images/crabs/spongecrab02.jpg" },
            { url : "images/crabs/spongecrab03.jpg" },
            { url : "images/crabs/spongecrab04.jpg" },
            { url : "images/crabs/spongecrab05.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/523181-Metadromia-wilsoni",
        references : [
            { id: 1, detail : "McLay, C.L. (1988) Brachyura and crab-like anomura of New Zealand (pp68-70).  Leigh Laboratory Bulletin, 22. (1988)" }
        ]
    },
    {
        commonName : "Tuberculate Pear Crab",
        scientificName : "Pyromaia tuberculata",
        attributes : [ 
            { key: "carapaceShape", values : ["triangle"] },
            { key: "lastLegsArePaddles", values : ["false"] },
            { key: "surfaceTexture", values : ["bumpy","seaweed"]},
            { key: "halfCrab", values : ["false"]},
            { key: "camouflageCrab", values : ["false"] }
        ],
        details : [
            { text: "Shell is triangular with a rounded base (pear shaped), with the back of the crab appearing to buldge."},
            { text: "Shell has a large spikes on each side behind the eyes."},
            { text: "Shell can be up to 17.7mm wide.", references: [1]},
            { text: "Shell can be bumpy or covered in seaweed or sedmients."},
            { text: "Found intertidally to 650m.", references: [1]},
            { text: "Found under rocks or on sand and mud.", references: [1]},
            { text: "Colouring light green/brown. Can appear furry/muddy due to a covering of 'hairs'."},
            { text: "<b>Legs are significantly longer than the camouflage crabs</b>."}
        ],
        similarTo: [
            { key: "Notomithrax minor", label: "Small Decorator Crab" },
            { key: "Notomithrax peronii", label: "Peron's Decorator Crab" },
            { key: "Notomithrax ursus", label: "Hairy Seaweed Crab" }
        ],
        images : [ 
            { url : "images/crabs/tuberculatepearcrab03.jpg" },
            { url : "images/crabs/tuberculatepearcrab04.jpg" },
            { url : "images/crabs/tuberculatepearcrab01.jpg" },
            { url : "images/crabs/tuberculatepearcrab02.jpg" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/165487-Pyromaia-tuberculata",
        references : [
            { id: 1, detail : "McLay, C.L. (1988) Brachyura and crab-like anomura of New Zealand (pp112-114).  Leigh Laboratory Bulletin, 22. (1988)" }
        ]
    }
]