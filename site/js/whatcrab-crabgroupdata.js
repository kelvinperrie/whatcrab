// {
//     groupName : "Small and round",
//     crabItems : [
//         {
//             name : "Petrolisthes elongatus",
//             directToGroupName : ""
//         },
//         {
//             name : "Elamena producta",
//             directToGroupName : ""
//         }
//     ]
// },

var crabGroupData = [
    {
        groupName : "Base crabs",
        description : "",
        helpText : [
            "Check the shape of the shell; for example is it square or round",
            "Check the size of the crab; is it small or large",
            "Is the crab covered in seaweed or hairs/fur?"
        ],
        crabItems : [
            {
                name : "Leptograpsus variegatus",
                image : "images/crabs/small-purplerockcrab01.jpg",
                directToGroupName : "Big oval or round",
                idCharacteristics : [ "White dots on claws" ]
            },
            {
                name : "Hemigrapsus sexdentatus",
                image : "images/crabs/small-commonrockcrab01.jpg",
                directToGroupName : "Big oval or round",
                idCharacteristics : [ "squarish", "never furry" ]
            },
            {
                name : "Hemigrapsus crenulatus",
                image : "images/crabs/small-hairyhandedcrab05.jpg",
                directToGroupName : "Big oval or round",
                idCharacteristics : [ "May have furry legs" ]
            },
            {
                name : "Cyclograpsus lavaux",
                image : "images/crabs/small-smoothshorecrab04.jpg",
                directToGroupName : "The rectangle gang",
                idCharacteristics : [ "Mostly rectangle shaped","no notches on sides of shell" ]
            },
            {
                name : "Petrolisthes elongatus",
                image : "images/crabs/small-nzhalfcrab01.jpg",
                directToGroupName : "Small and round",
                idCharacteristics : [ "Very flat", "Six walking legs" ]
            },
            {
                name : "Guinusia chabrus",
                image : "images/crabs/small-redrockcrab01.jpg",
                directToGroupName : "Big oval or round",
                idCharacteristics : [ "Circular shell with spikes on front and sides" ]
            },
            {
                name : "Austrohelice crassa",
                image : "images/crabs/small-tunnelingmudcrab03.jpg",
                directToGroupName : "The rectangle gang",
                idCharacteristics : [ "Very rectangular shaped shell" ]
            },
            {
                name : "Ozius deplanatus",
                image : "images/crabs/small-ironcrab02.jpg",
                directToGroupName : "Big oval or round",
                idCharacteristics : [ "" ]
            },
            {
                name : "Metacarcinus novaezelandiae",
                image : "images/crabs/small-piecrustcrab05.jpg",
                directToGroupName : "Big oval or round",
                idCharacteristics : [ "Shell edges crimped like a pie crust" ]
            },
            {
                name : "Heterozius rotundifrons",
                image : "images/crabs/small-bighandcrab01.jpg",
                directToGroupName : "Big oval or round",
                idCharacteristics : [ "Yellow tips on claws" ]
            },
            {
                name : "Eurynolambrus australis",
                image : "images/crabs/small-trianglecrab05.jpg",
                directToGroupName : "Big oval or round",
                idCharacteristics : [ "Wide triangle shaped shell" ]
            },
            {
                name : "Notomithrax ursus",
                image : "images/crabs/small-smalldecoratorcrab02.jpg",
                directToGroupName : "Weedy types",
                idCharacteristics : [ "pear shaped", "covered in weed" ]
            },
            {
                name : "Notomithrax peronii",
                image : "images/crabs/small-peronscamouflagecrab05.jpg",
                directToGroupName : "Weedy types",
                idCharacteristics : [ "pear shaped", "bumpy and spikey" ]
            },
            {
                name : "Ovalipes catharus",
                image : "images/crabs/small-paddlecrab06.jpg",
                directToGroupName : "Paddlers",
                idCharacteristics : [ "oval or round", "back legs are paddles" ]
            },
            {
                name : "Charybdis japonica",
                image : "images/crabs/small-asianpaddlecrab07.jpg",
                directToGroupName : "Paddlers",
                idCharacteristics : [ "oval or round", "back legs are paddles" ]
            },
            {
                name : "Halicarcinus innominatus",
                image : "images/crabs/small-flatpillboxcrab04.jpg",
                directToGroupName : "Small and round",
                idCharacteristics : [ "coin shaped", "max of a couple of cm wide" ]
            },
            {
                name : "Halicarcinus whitei",
                image : "images/crabs/small-estuarinepillboxcrab02.jpg",
                directToGroupName : "Small and round",
                idCharacteristics : [ "coin shaped", "furry" ]
            },
            {
                name : "Neohymenicus pubescens",
                image : "images/crabs/small-neopub05.jpg",
                directToGroupName : "Weedy types",
                idCharacteristics : [ "coin shaped", "very small (max 7.5mm wide)" ]
            },
            {
                name : "Pilumnus lumpinus",
                image : "images/crabs/small-hairycrab03.jpg",
                directToGroupName : "Weedy types",
                idCharacteristics : [ "furry", "not coin shaped" ]
            },
            {
                name : "Metadromia wilsoni",
                image : "images/crabs/small-spongecrab01.jpg",
                directToGroupName : "Kind of oval",
                idCharacteristics : [ "bumpy and bulky shell (i.e. not flat)", "may have sponge on top" ]
            },
            {
                name : "Nepinnotheres novaezelandiae",
                image : "images/crabs/small-peacrab03.jpg",
                directToGroupName : "Small and round",
                idCharacteristics : [ "shaped like a pea" ]
            },
            {
                name : "Pyromaia tuberculata",
                image : "images/crabs/small-tuberculatepearcrab03.jpg",
                directToGroupName : "Weedy types",
                idCharacteristics : [ "pear shaped", "very long legs" ]
            }
        ]
    },
    {
        groupName : "Small and round",
        description : "",
        helpText : [
            "Is the crab flat like a coin or a spherical like a pea?",
            "Are the claws big and flat or small and skinny?",
            "Does it have six walking legs or eight?"
        ],
        crabItems : [
            // half crabs
            {
                name : "Petrolisthes elongatus",
                image : "images/crabs/small-nzhalfcrab01.jpg",
                directToGroupName : "Half crabs",
                idCharacteristics : [  ]
            },
            {
                name : "Petrocheles spinosus",
                image : "images/crabs/small-petrochelesspinosus02.jpg",
                directToGroupName : "Half crabs",
                idCharacteristics : [  ]
            },
            // pillbox crabs
            {
                name : "Halicarcinus innominatus",
                image : "images/crabs/small-flatpillboxcrab04.jpg",
                directToGroupName : "Shaped like coins",
                idCharacteristics : [  ]
            },
            {
                name : "Halicarcinus whitei",
                image : "images/crabs/small-estuarinepillboxcrab02.jpg",
                directToGroupName : "Shaped like coins",
                idCharacteristics : [  ]
            },
            // others
            {
                name : "Elamena producta",
                image : "images/crabs/small-pauacrab05.jpg",
                directToGroupName : "Shaped like coins",
                idCharacteristics : [  ]
            },            
            {
                name : "Neohymenicus pubescens",
                image : "images/crabs/small-neopub05.jpg",
                directToGroupName : "Shaped like coins",
                idCharacteristics : [  ]
            },
            {
                name : "Nepinnotheres novaezelandiae",
                image : "images/crabs/small-peacrab03.jpg",
                directToGroupName : "",
                idCharacteristics : [  ]
            },
            {
                name : "Metadromia wilsoni",
                image : "images/crabs/small-spongecrab01.jpg",
                directToGroupName : "",
                idCharacteristics : [  ]
            }
        ]
    },
    {
        groupName : "Weedy types",
        helpText : ["Does the stuff covering the crab look more like seaweed or fur/hair?"],
        description : "Crabs covered in seaweed or hairs/fur",
        crabItems : [
            // camo crabs
            {
                name : "Notomithrax ursus",
                image : "images/crabs/small-hairyseaweedcrab03.jpg",
                directToGroupName : "Camoish crabs",
                idCharacteristics : [  ]
            },
            {
                name : "Notomithrax peronii",
                image : "images/crabs/small-peronscamouflagecrab05.jpg",
                directToGroupName : "Camoish crabs",
                idCharacteristics : [  ]
            },
            {
                name : "Notomithrax peronii",
                image : "images/crabs/small-peronscamouflagecrab01.jpg",
                directToGroupName : "Camoish crabs",
                idCharacteristics : [  ]
            },
            {
                name : "Notomithrax minor",
                image : "images/crabs/small-smalldecoratorcrab02.jpg",
                directToGroupName : "Camoish crabs",
                idCharacteristics : [  ]
            },
            // pear crab
            {
                name : "Pyromaia tuberculata",
                image : "images/crabs/small-tuberculatepearcrab03.jpg",
                directToGroupName : "Camoish crabs",
                idCharacteristics : [  ]
            },
            // small dudes
            {
                name : "Halicarcinus whitei",
                image : "images/crabs/small-estuarinepillboxcrab02.jpg",
                directToGroupName : "Pillbox crabs",
                idCharacteristics : [  ]
            },
            {
                name : "Neohymenicus pubescens",
                image : "images/crabs/small-neopub05.jpg",
                directToGroupName : "",
                idCharacteristics : [  ]
            },
            // oval dudes
            {
                name : "Pilumnus lumpinus",
                image : "images/crabs/small-hairycrab03.jpg",
                directToGroupName : "Oval and furry",
                idCharacteristics : [  ]
            },
            {
                name : "Pilumnus novaezelandiae",
                image : "images/crabs/small-bristlecrab03.jpg",
                directToGroupName : "Oval and furry",
                idCharacteristics : [  ]
            }
        ]
    },
    {
        groupName : "Oval and furry",
        description : "",
        helpText : [""],
        crabItems : [
            {
                name : "Pilumnus lumpinus",
                image : "images/crabs/small-hairycrab03.jpg",
                directToGroupName : "",
                idCharacteristics : [  ]
            },
            {
                name : "Pilumnus novaezelandiae",
                image : "images/crabs/small-bristlecrab03.jpg",
                directToGroupName : "",
                idCharacteristics : [  ]
            }
        ]
    },
    {
        groupName : "Camoish crabs",
        description : "",
        helpText : ["Check how long the legs are compared to the body"],
        crabItems : [
            {
                name : "Notomithrax ursus",
                image : "images/crabs/small-hairyseaweedcrab04.jpg",
                directToGroupName : "Camo crabs",
                idCharacteristics : [  ]
            },
            {
                name : "Notomithrax peronii",
                image : "images/crabs/small-peronscamouflagecrab01.jpg",
                directToGroupName : "Camo crabs",
                idCharacteristics : [  ]
            },
            {
                name : "Notomithrax minor",
                image : "images/crabs/small-smalldecoratorcrab02.jpg",
                directToGroupName : "Camo crabs",
                idCharacteristics : [  ]
            },
            {
                name : "Pyromaia tuberculata",
                image : "images/crabs/small-tuberculatepearcrab03.jpg",
                directToGroupName : "",
                idCharacteristics : [  ]
            }
        ]
    },
    {
        groupName : "Camo crabs",
        description : "",
        helpText : [
            "Check for posterior spines",
            "Check claw colour"
        ],
        crabItems : [
            {
                name : "Notomithrax ursus",
                image : "images/crabs/small-hairyseaweedcrab04.jpg",
                directToGroupName : "",
                idCharacteristics : [  ]
            },
            {
                name : "Notomithrax peronii",
                image : "images/crabs/small-peronscamouflagecrab03.jpg",
                directToGroupName : "",
                idCharacteristics : [  ]
            },
            {
                name : "Notomithrax minor",
                image : "images/crabs/small-smalldecoratorcrab03.jpg",
                directToGroupName : "",
                idCharacteristics : [  ]
            }
        ]
    },
    {
        groupName : "The rectangle gang",
        description : "",
        helpText : [
            "Check for notches/spikes on the side of the shell"
        ],
        crabItems : [
            {
                name : "Cyclograpsus lavaux",
                image : "images/crabs/small-smoothshorecrab04.jpg",
                directToGroupName : "",
                idCharacteristics : [  ]
            },
            {
                name : "Austrohelice crassa",
                image : "images/crabs/small-tunnelingmudcrab03.jpg",
                directToGroupName : "Mud tunnelers",
                idCharacteristics : [  ]
            },
            {
                name : "Hemiplax hirtipes",
                image : "images/crabs/small-sentinelcrab04.jpg",
                directToGroupName : "Mud tunnelers",
                idCharacteristics : [  ]
            }
        ]
    },
    {
        groupName : "Mud tunnelers",
        description : "",
        helpText : [
            "Check the claws, are the ends bent down (shaped like a boomerang)"
        ],
        crabItems : [
            {
                name : "Austrohelice crassa",
                image : "images/crabs/small-tunnelingmudcrab03.jpg",
                directToGroupName : "",
                idCharacteristics : [  ]
            },
            {
                name : "Hemiplax hirtipes",
                image : "images/crabs/small-sentinelcrab04.jpg",
                directToGroupName : "",
                idCharacteristics : [  ]
            }
        ]
    },
    {
        groupName : "Big oval or round",
        description : "",
        helpText : [
            ""
        ],
        crabItems : [
            {
                name : "Leptograpsus variegatus",
                image : "images/crabs/small-purplerockcrab01.jpg",
                directToGroupName : "Big oval or round",
                idCharacteristics : [  ]
            },
            {
                name : "Hemigrapsus sexdentatus",
                image : "images/crabs/small-commonrockcrab01.jpg",
                directToGroupName : "Big oval or round",
                idCharacteristics : [  ]
            },
            {
                name : "Hemigrapsus crenulatus",
                image : "images/crabs/small-hairyhandedcrab05.jpg",
                directToGroupName : "Big oval or round",
                idCharacteristics : [  ]
            },
            {
                name : "Ozius deplanatus",
                image : "images/crabs/small-ironcrab02.jpg",
                directToGroupName : "Iron vs smooth",
                idCharacteristics : [  ]
            },
            {
                name : "Pilumnopeus serratifrons",
                image : "images/crabs/small-smoothhandedcrab06.jpg",
                directToGroupName : "Iron vs smooth",
                idCharacteristics : [  ]
            },
            {
                name : "Metacarcinus novaezelandiae",
                image : "images/crabs/small-piecrustcrab05.jpg",
                directToGroupName : "",
                idCharacteristics : [  ]
            },
            {
                name : "Austrohelice crassa",
                image : "images/crabs/small-tunnelingmudcrab03.jpg",
                directToGroupName : "The rectangle gang",
                idCharacteristics : [  ]
            },
            {
                name : "Heterozius rotundifrons",
                image : "images/crabs/small-bighandcrab01.jpg",
                directToGroupName : "Big oval or round"
            },
            {
                name : "Eurynolambrus australis",
                image : "images/crabs/small-trianglecrab05.jpg",
                directToGroupName : "Big oval or round",
                idCharacteristics : [  ]
            },
            {
                name : "Metadromia wilsoni",
                image : "images/crabs/small-spongecrab01.jpg",
                directToGroupName : "Kind of oval",
                idCharacteristics : [  ]
            }
        ]
    },
    {
        groupName : "Iron vs smooth",
        description : "",
        helpText : [
            ""
        ],
        crabItems : [
            {
                name : "Ozius deplanatus",
                image : "images/crabs/small-ironcrab02.jpg",
                directToGroupName : "",
                idCharacteristics : [  ]
            },
            {
                name : "Ozius deplanatus",
                image : "images/crabs/small-ironcrab04.jpg",
                directToGroupName : "",
                idCharacteristics : [  ]
            },
            {
                name : "Pilumnopeus serratifrons",
                image : "images/crabs/small-smoothhandedcrab06.jpg",
                directToGroupName : "",
                idCharacteristics : [  ]
            },
            {
                name : "Pilumnopeus serratifrons",
                image : "images/crabs/small-smoothhandedcrab09.jpg",
                directToGroupName : "",
                idCharacteristics : [  ]
            }
        ]
    },
    {
        groupName : "Half crabs",
        description : "",
        helpText : [
            ""
        ],
        crabItems : [
            {
                name : "Petrolisthes elongatus",
                image : "images/crabs/small-nzhalfcrab01.jpg",
                directToGroupName : "",
                idCharacteristics : [  ]
            },
            {
                name : "Petrolisthes novaezelandiae",
                image : "images/crabs/small-redhalfcrab01.jpg",
                directToGroupName : "",
                idCharacteristics : [  ]
            },
            {
                name : "Petrolisthes novaezelandiae",
                image : "images/crabs/small-redhalfcrab05.jpg",
                directToGroupName : "",
                idCharacteristics : [  ]
            },
            {
                name : "Petrocheles spinosus",
                image : "images/crabs/small-petrochelesspinosus03.jpg",
                directToGroupName : "",
                idCharacteristics : [  ]
            }
        ]
    },
    {
        groupName : "Shaped like coins",
        description : "",
        helpText : [
            ""
        ],
        crabItems : [
            // pillbox crabs
            {
                name : "Halicarcinus cookii",
                image : "images/crabs/small-cookspillboxcrab03.jpg",
                directToGroupName : "Pillbox crabs",
                idCharacteristics : [  ]
            },
            {
                name : "Halicarcinus innominatus",
                image : "images/crabs/small-flatpillboxcrab04.jpg",
                directToGroupName : "Pillbox crabs",
                idCharacteristics : [  ]
            },
            {
                name : "Halicarcinus varius",
                image : "images/crabs/small-variablepillboxcrab04.jpg",
                directToGroupName : "Pillbox crabs",
                idCharacteristics : [  ]
            },
            {
                name : "Halicarcinus whitei",
                image : "images/crabs/small-estuarinepillboxcrab02.jpg",
                directToGroupName : "Pillbox crabs",
                idCharacteristics : [  ]
            },
            // others
            {
                name : "Elamena producta",
                image : "images/crabs/small-pauacrab05.jpg",
                directToGroupName : "",
                idCharacteristics : [  ]
            },            
            {
                name : "Neohymenicus pubescens",
                image : "images/crabs/small-neopub05.jpg",
                directToGroupName : "",
                idCharacteristics : [  ]
            },
        ]
    },
    {
        groupName : "Pillbox crabs",
        description : "",
        helpText : [
            ""
        ],
        crabItems : [
            // pillbox crabs
            {
                name : "Halicarcinus cookii",
                image : "images/crabs/small-cookspillboxcrab03.jpg",
                directToGroupName : "",
                idCharacteristics : [  ]
            },
            {
                name : "Halicarcinus innominatus",
                image : "images/crabs/small-flatpillboxcrab04.jpg",
                directToGroupName : "",
                idCharacteristics : [  ]
            },
            {
                name : "Halicarcinus varius",
                image : "images/crabs/small-variablepillboxcrab04.jpg",
                directToGroupName : "",
                idCharacteristics : [  ]
            },
            {
                name : "Halicarcinus whitei",
                image : "images/crabs/small-estuarinepillboxcrab02.jpg",
                directToGroupName : "",
                idCharacteristics : [  ]
            }
        ]
    },
    {
        groupName : "Paddlers",
        description : "",
        helpText : [
            ""
        ],
        crabItems : [

            {
                name : "Ovalipes catharus",
                image : "images/crabs/small-paddlecrab06.jpg",
                directToGroupName : "Paddlers",
                idCharacteristics : [  ]
            },
            {
                name : "Charybdis japonica",
                image : "images/crabs/small-asianpaddlecrab07.jpg",
                directToGroupName : "Paddlers",
                idCharacteristics : [  ]
            },
            {
                name : "Nectocarcinus antarcticus",
                image : "images/crabs/small-redswimmingcrab05.jpg",
                directToGroupName : "Paddlers",
                idCharacteristics : [  ]
            },
        ]
    }
]
