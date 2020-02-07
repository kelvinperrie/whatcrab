var crabData = [
    {
        commonName : "New Zealand Half-Crab",
        aka : ["Blue Half-Crab"],
        scientificName : "Petrolisthes elongatus",
        attributes : [
            { key: "carapaceShape" , values : ["triangle"] }
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/58026368/large.jpg?1576450688" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/410371-Petrolisthes-elongatus"
    },
    {
        commonName : "Red Half-Crab",
        scientificName : "Petrolisthes novaezelandiae",
        attributes : [
            { key: "carapaceShape" , values : ["triangle"] }
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
            { key: "carapaceShape" , values : ["oval"] }
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/52078601/large.jpg?1569120977" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/410714-Heterozius-rotundifrons"
    },
    {
        commonName : "Pie Crust Crab",
        scientificName : "Metacarcinus novaezelandiae",
        attributes : [
            { key: "carapaceShape" , values : ["oval"] }
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/59642254/large.jpg?1579053800" },
            { url : "https://static.inaturalist.org/photos/59642252/large.jpg?1579053798" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/410433-Metacarcinus-novaezelandiae"
    },
    {
        commonName : "Policeman Crab",
        scientificName : "Neommatocarcinus huttoni",
        attributes : [
            { key: "carapaceShape" , values : ["triangle"] }
        ],
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
            { key: "carapaceShape" , values : ["square"] }
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/59867596/large.jpg?1579394117" },
            { url : "https://static.inaturalist.org/photos/58026735/large.jpg?1576451040" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/326099-Leptograpsus-variegatus"
    },
    {
        commonName : "Common Rock Crab",
        scientificName : "Hemigrapsus sexdentatus",
        aka : ["Purple Rock Crab"],
        attributes : [
            { key: "carapaceShape" , values : ["square"] }
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/59867812/large.jpg?1579394358" },
            { url : "https://static.inaturalist.org/photos/36119006/large.jpg?1556341147" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/410820-Hemigrapsus-sexdentatus"
    },
    {
        commonName : "Paua Spider Crab",
        scientificName : "Elamena producta",
        attributes : [
            { key: "carapaceShape" , values : ["triangle"] }
        ],
        images : [
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
            { key : "toothOnMargin", values : ["true"] }
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
            { key : "toothOnMargin", values : ["false"] }
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
            { key : "toothOnMargin", values : ["true"] }
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/59640822/large.jpg?1579051845" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/416625-Halicarcinus-varius"
    },
    {
        commonName : "White's False Spider Crab",
        scientificName : "Halicarcinus whitei",
        attributes : [
            { key : "carapaceShape", values : ["round"] },
            { key : "toothOnMargin", values : ["false"] },
            { key : "covering", values : ["setae"] }
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
            { key : "covering", values : ["setae"] }
        ],
        images : [],
        natureWatchLink: "https://inaturalist.nz/taxa/471053-Hymenosoma-depressum"
    },
    {
        commonName : null,
        scientificName : "Neohymenicus pubescens",
        attributes : [
            { key : "carapaceShape", values : ["round"] },
            { key : "toothOnMargin", values : ["false"] },
            { key : "covering", values : ["setae"] }
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/29172890/large.jpeg?1544839594" },
            { url : "https://static.inaturalist.org/photos/58346532/large.jpg?1577053231" },
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/471492-Neohymenicus-pubescens"
    },
    {
        commonName : "Triangle Crab",
        scientificName : "Eurynolambrus australis",
        attributes : [
            { key : "carapaceShape", values : ["triangle"] }
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/59759094/large.jpg?1579219887" },
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/424825-Eurynolambrus-australis"
    },
    {
        commonName : "Small Decorator Crab",
        aka : "Camouflage Crab",
        scientificName : "Notomithrax minor",
        attributes : [
            { key : "carapaceShape", values : ["triangle"] },
            { key : "covering", values : ["seaweed"] },
            { key : "posteriorSpines", values : ["true"] }
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/29604637/large.jpeg?1545979036" },
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/410680-Notomithrax-minor"
    },
    {
        commonName : "Peron's Decorator Crab",
        scientificName : "Notomithrax peronii",
        attributes : [
            { key : "carapaceShape", values : ["triangle"] },
            { key : "covering", values : ["seaweed"] },
            { key : "posteriorSpines", values : ["false"] }
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/43768712/large.jpg?1562115869" },
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/410683-Notomithrax-peronii"
    },
    {
        commonName : "Hairy Seaweed Crab",
        scientificName : "Notomithrax ursus",
        attributes : [
            { key : "carapaceShape", values : ["triangle"] },
            { key : "covering", values : ["seaweed"] },
            { key : "posteriorSpines", values : ["false"] }
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/48653558/large.jpg?1566200370" },
            { url : "https://static.inaturalist.org/photos/58346138/large.jpg?1577052802" },
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/410681-Notomithrax-ursus"
    },
    {
        commonName : "Iron Crab",
        scientificName : "Ozius deplanatus",
        attributes : [
            { key : "carapaceShape", values : ["oval"] },
        ],
        images : [
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
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/29568932/large.jpeg?1545892882" },
            { url : "https://static.inaturalist.org/photos/54043892/large.jpg?1571033968" },
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/471785-Pilumnopeus-serratifrons"
    },
    {
        commonName : "Hairy Crab",
        scientificName : "Pilumnus lumpinus",
        attributes : [
            { key : "carapaceShape",  values : ["oval"] },
            { key : "covering", values : ["setae"] }
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/35241504/large.jpg?1555731045" },
            { url : "https://static.inaturalist.org/photos/59759210/large.jpg?1579219986" }
        ],
        natureWatchLink: "https://inaturalist.nz/taxa/471785-Pilumnopeus-serratifrons"
    },
    {
        commonName : "Red Rock Crab",
        scientificName : "Guinusia chabrus",
        attributes : [
            { key: "carapaceShape" , values : ["round"] }
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/47693819/large.jpg?1565414389" }
        ]
    },
    {
        commonName : "Asian Paddle Crab",
        scientificName : "Charybdis japonica",
        attributes : [
            { key : "carapaceShape", values : ["oval"] },
            { key : "lastLegsArePaddles", values : ["true"] }
        ],
        images : [
            { url : "https://static.inaturalist.org/photos/26031963/original.jpeg?1538620860" }
        ]
    }
]