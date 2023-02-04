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
                directToGroupName : "Small and round"
            },
            {
                name : "Hemigrapsus sexdentatus",
                image : "images/crabs/small-commonrockcrab01.jpg",
                directToGroupName : "Small and round"
            },
            {
                name : "Hemigrapsus crenulatus",
                image : "images/crabs/small-hairyhandedcrab05.jpg",
                directToGroupName : "Small and round"
            },
            {
                name : "Cyclograpsus lavaux",
                image : "images/crabs/small-smoothshorecrab04.jpg",
                directToGroupName : "The rectangle gang"
            },
            {
                name : "Petrolisthes elongatus",
                image : "images/crabs/small-nzhalfcrab01.jpg",
                directToGroupName : "Small and round"
            },
            {
                name : "Guinusia chabrus",
                image : "images/crabs/small-redrockcrab01.jpg",
                directToGroupName : "Small and round"
            },
            {
                name : "Austrohelice crassa",
                image : "images/crabs/small-tunnelingmudcrab03.jpg",
                directToGroupName : "The rectangle gang"
            },
            {
                name : "Ozius deplanatus",
                image : "images/crabs/small-ironcrab02.jpg",
                directToGroupName : "Kind of oval"
            },
            {
                name : "Metacarcinus novaezelandiae",
                image : "images/crabs/small-piecrustcrab05.jpg",
                directToGroupName : "Kind of oval"
            },
            {
                name : "Heterozius rotundifrons",
                image : "images/crabs/small-bighandcrab01.jpg",
                directToGroupName : "Kind of oval"
            },
            {
                name : "Eurynolambrus australis",
                image : "images/crabs/small-trianglecrab05.jpg",
                directToGroupName : ""
            },
            {
                name : "Notomithrax ursus",
                image : "images/crabs/small-smalldecoratorcrab02.jpg",
                directToGroupName : "Weedy types"
            },
            {
                name : "Ovalipes catharus",
                image : "images/crabs/small-paddlecrab06.jpg",
                directToGroupName : "Paddlers"
            },
            {
                name : "Charybdis japonica",
                image : "images/crabs/small-asianpaddlecrab07.jpg",
                directToGroupName : "Paddlers"
            },
            {
                name : "Halicarcinus innominatus",
                image : "images/crabs/small-flatpillboxcrab04.jpg",
                directToGroupName : "Small and round"
            },
            {
                name : "Neohymenicus pubescens",
                image : "images/crabs/small-neopub05.jpg",
                directToGroupName : "Weedy types"
            },
            {
                name : "Pilumnus lumpinus",
                image : "images/crabs/small-hairycrab03.jpg",
                directToGroupName : "Weedy types"
            },
            {
                name : "Metadromia wilsoni",
                image : "images/crabs/small-spongecrab01.jpg",
                directToGroupName : "Kind of oval"
            },
            {
                name : "Nepinnotheres novaezelandiae",
                image : "images/crabs/small-peacrab03.jpg",
                directToGroupName : "Small and round"
            },
            {
                name : "Pyromaia tuberculata",
                image : "images/crabs/small-tuberculatepearcrab03.jpg",
                directToGroupName : "Weedy types"
            }
        ]
    },
    {
        groupName : "Small and round",
        description : "",
        helpText : [
            "Is the crab flat like a coin or a sphere like a pea",
            "Are the claw big and flat or small and skinny"
        ],
        crabItems : [
            {
                name : "Petrolisthes elongatus",
                image : "images/crabs/small-nzhalfcrab01.jpg",
                directToGroupName : "Half crabs"
            },
            {
                name : "Elamena producta",
                image : "images/crabs/small-pauacrab05.jpg",
                directToGroupName : "Half crabs"
            }
        ]
    },
    {
        groupName : "Weedy types",
        helpText : ["Does the stuff covering the crab look more like seaweed or fur/hair?"],
        description : "Crabs covered in seaweed or hairs/fur",
        crabItems : [
            {
                name : "Notomithrax ursus",
                image : "images/crabs/small-hairyseaweedcrab04.jpg",
                directToGroupName : "Camoish crabs"
            },
            {
                name : "Notomithrax peronii",
                image : "images/crabs/small-peronscamouflagecrab02.jpg",
                directToGroupName : "Camoish crabs"
            },
            {
                name : "Notomithrax peronii",
                image : "images/crabs/small-peronscamouflagecrab01.jpg",
                directToGroupName : "Camoish crabs"
            },
            {
                name : "Notomithrax minor",
                image : "images/crabs/small-smalldecoratorcrab02.jpg",
                directToGroupName : "Camoish crabs"
            },
            {
                name : "Pyromaia tuberculata",
                image : "images/crabs/small-tuberculatepearcrab03.jpg",
                directToGroupName : "Camoish crabs"
            },
            {
                name : "Halicarcinus whitei",
                image : "images/crabs/small-estuarinepillboxcrab02.jpg",
                directToGroupName : "Pillbox"
            },
            {
                name : "Neohymenicus pubescens",
                image : "images/crabs/small-neopub05.jpg",
                directToGroupName : ""
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
                directToGroupName : "Camo crabs"
            },
            {
                name : "Notomithrax peronii",
                image : "images/crabs/small-peronscamouflagecrab01.jpg",
                directToGroupName : "Camo crabs"
            },
            {
                name : "Notomithrax minor",
                image : "images/crabs/small-smalldecoratorcrab02.jpg",
                directToGroupName : "Camo crabs"
            },
            {
                name : "Pyromaia tuberculata",
                image : "images/crabs/small-tuberculatepearcrab03.jpg",
                directToGroupName : ""
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
                directToGroupName : ""
            },
            {
                name : "Notomithrax peronii",
                image : "images/crabs/small-peronscamouflagecrab03.jpg",
                directToGroupName : ""
            },
            {
                name : "Notomithrax minor",
                image : "images/crabs/small-smalldecoratorcrab03.jpg",
                directToGroupName : ""
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
                directToGroupName : ""
            },
            {
                name : "Austrohelice crassa",
                image : "images/crabs/small-tunnelingmudcrab03.jpg",
                directToGroupName : "Mud tunnelers"
            },
            {
                name : "Hemiplax hirtipes",
                image : "images/crabs/small-sentinelcrab04.jpg",
                directToGroupName : "Mud tunnelers"
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
                directToGroupName : ""
            },
            {
                name : "Hemiplax hirtipes",
                image : "images/crabs/small-sentinelcrab04.jpg",
                directToGroupName : ""
            }
        ]
    },
    {
        groupName : "Kind of oval",
        description : "",
        helpText : [
            ""
        ],
        crabItems : [
            {
                name : "Ozius deplanatus",
                image : "images/crabs/small-ironcrab02.jpg",
                directToGroupName : "Iron vs smooth"
            },
            {
                name : "Pilumnopeus serratifrons",
                image : "images/crabs/small-smoothhandedcrab06.jpg",
                directToGroupName : "Iron vs smooth"
            },
            {
                name : "Metacarcinus novaezelandiae",
                image : "images/crabs/small-piecrustcrab05.jpg",
                directToGroupName : ""
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
                directToGroupName : ""
            },
            {
                name : "Ozius deplanatus",
                image : "images/crabs/small-ironcrab04.jpg",
                directToGroupName : ""
            },
            {
                name : "Pilumnopeus serratifrons",
                image : "images/crabs/small-smoothhandedcrab06.jpg",
                directToGroupName : ""
            },
            {
                name : "Pilumnopeus serratifrons",
                image : "images/crabs/small-smoothhandedcrab09.jpg",
                directToGroupName : ""
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
                directToGroupName : ""
            },
            {
                name : "Petrolisthes novaezelandiae",
                directToGroupName : ""
            },
            {
                name : "Petrocheles spinosus",
                directToGroupName : ""
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
                directToGroupName : "Paddlers"
            },
            {
                name : "Charybdis japonica",
                image : "images/crabs/small-asianpaddlecrab07.jpg",
                directToGroupName : "Paddlers"
            },
            {
                name : "Nectocarcinus antarcticus",
                image : "images/crabs/small-redswimmingcrab05.jpg",
                directToGroupName : "Paddlers"
            },
        ]
    }
]

var PossibleCrabItem = function(crabItem) {
    var self = this;

    self.image = crabItem.image;
    self.name = crabItem.name;
    self.directToGroupName = crabItem.directToGroupName;
}


var CrabGroupModel = function(crabGroup) {
    var self = this;

    self.groupName = crabGroup.groupName;
    self.crabItems = [];
    self.helpText = crabGroup.helpText;
    self.description = crabGroup.description;

    crabGroup.crabItems.forEach((element) => {
        var newCrabItem = new PossibleCrabItem(element);
        self.crabItems.push(newCrabItem);
    })
}

var PageModel = function() {
    var self = this;

    self.breadcrumbs = ko.observableArray();
    self.currentCrabGroup = ko.observable();
    self.crabGroups = [];


    self.HandCrabItemClick = function(item) {

        if(item.directToGroupName) {
            self.SetCurrentGroup(item.directToGroupName);
        } else {

            // load the crab details

        }
    }

    // takes the name of a crab group and sets that to the currently displayed crab group
    // increments breadcrumbs????
    self.SetCurrentGroup = function(groupName) {
        //console.log("we're looking for a group called " + groupName)
        var match = null;
        self.crabGroups.every((element) => {
            //console.log("comparing "+element.groupName+ " with " + groupName);
            if(element.groupName === groupName) {
                //console.log("we got a match!")
                match = element;
                return false;
            }
            return true;
        });

        if(match) {
            self.currentCrabGroup(match);
            self.breadcrumbs.push(groupName);
        } else {
            // we didn't find the group - how we dealing with errors?
            console.log("didn't find the group called " + groupName);
        }
    };

    // the user clicked a breadcrumb. Typical.
    // we are going to remove any breadcrumbs after this one, and also load the crab group they clicked on
    self.HandleBreadcrumbClick = function(breadcrumb) {
        // start at the last breadcrumb and work our way backwards, deleting them, till we find the one that was clicked on
        while (self.breadcrumbs().length > 0) {

            if(self.breadcrumbs()[self.breadcrumbs().length-1] === breadcrumb) {
                // we found the clicked on breadcrumb!
                // remove it, because when we load this group it is going to get added again
                self.breadcrumbs.remove(breadcrumb);
                break;
            }
            // remove the last item
            self.breadcrumbs.splice(self.breadcrumbs.length-1, 1)
        }
        self.SetCurrentGroup(breadcrumb);
    }

    self.SetupData = function() {
        crabGroupData.forEach((element) => {
            var newGroup = new CrabGroupModel(element);
            self.crabGroups.push(newGroup);
        });
        // we're going to start with displaying the first one in our collection
        self.SetCurrentGroup(self.crabGroups[0].groupName);
    }
    self.SetupData();

}

var pageModel = new PageModel();
ko.applyBindings(pageModel);

