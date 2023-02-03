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
        crabItems : [
            {
                name : "Petrolisthes elongatus",
                directToGroupName : "Small and round"
            },
            {
                name : "Elamena producta",
                directToGroupName : "Small and round"
            },
            {
                name : "Cyclograpsus lavaux",
                directToGroupName : "The rectangle gang"
            },
            {
                name : "Austrohelice crassa",
                directToGroupName : "The rectangle gang"
            },
            {
                name : "Ozius deplanatus",
                directToGroupName : "Kind of oval"
            },
            {
                name : "Notomithrax ursus",
                directToGroupName : "Weedy types"
            },
            {
                name : "Notomithrax peronii",
                directToGroupName : "Weedy types"
            }
        ]
    },
    {
        groupName : "Small and round",
        crabItems : [
            {
                name : "Petrolisthes elongatus",
                directToGroupName : "Half crabs"
            },
            {
                name : "Elamena producta",
                directToGroupName : "Half crabs"
            }
        ]
    },
    {
        groupName : "Weedy types",
        crabItems : [
            {
                name : "Notomithrax ursus",
                directToGroupName : "Camoish crabs"
            },
            {
                name : "Notomithrax peronii",
                directToGroupName : "Camoish crabs"
            },
            {
                name : "Notomithrax minor",
                directToGroupName : "Camoish crabs"
            },
            {
                name : "Pyromaia tuberculata",
                directToGroupName : "Camoish crabs"
            },
            {
                name : "Halicarcinus whitei",
                directToGroupName : "Pillbox"
            },
            {
                name : "Neohymenicus pubescens",
                directToGroupName : ""
            }
        ]
    },
    {
        groupName : "Camoish crabs",
        crabItems : [
            {
                name : "Notomithrax ursus",
                directToGroupName : "Camo crabs"
            },
            {
                name : "Notomithrax peronii",
                directToGroupName : "Camo crabs"
            },
            {
                name : "Notomithrax minor",
                directToGroupName : "Camo crabs"
            },
            {
                name : "Pyromaia tuberculata",
                directToGroupName : ""
            }
        ]
    },
    {
        groupName : "Camo crabs",
        crabItems : [
            {
                name : "Notomithrax ursus",
                directToGroupName : ""
            },
            {
                name : "Notomithrax peronii",
                directToGroupName : ""
            },
            {
                name : "Notomithrax minor",
                directToGroupName : ""
            }
        ]
    },
    {
        groupName : "The rectangle gang",
        crabItems : [
            {
                name : "Cyclograpsus lavaux",
                directToGroupName : ""
            },
            {
                name : "Austrohelice crassa",
                directToGroupName : "Mud tunnelers"
            },
            {
                name : "Hemiplax hirtipes",
                directToGroupName : "Mud tunnelers"
            }
        ]
    },
    {
        groupName : "Mud tunnelers",
        crabItems : [
            {
                name : "Austrohelice crassa",
                directToGroupName : ""
            },
            {
                name : "Hemiplax hirtipes",
                directToGroupName : ""
            }
        ]
    },
    {
        groupName : "Kind of oval",
        crabItems : [
            {
                name : "Ozius deplanatus",
                directToGroupName : "Iron vs smooth"
            },
            {
                name : "Pilumnopeus serratifrons",
                directToGroupName : "Iron vs smooth"
            },
            {
                name : "Metacarcinus novaezelandiae",
                directToGroupName : ""
            }
        ]
    },
    {
        groupName : "Iron vs smooth",
        crabItems : [
            {
                name : "Ozius deplanatus",
                directToGroupName : ""
            },
            {
                name : "Pilumnopeus serratifrons",
                directToGroupName : ""
            }
        ]
    },
    {
        groupName : "Half crabs",
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
    }
]

var PossibleCrabItem = function(crabItem) {
    var self = this;

    self.image = "";
    self.name = crabItem.name;
    self.directToGroupName = crabItem.directToGroupName;
}


var CrabGroupModel = function(groupName, crabItems) {
    var self = this;

    self.groupName = groupName;
    self.crabItems = [];

    crabItems.forEach((element) => {
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
            var newGroup = new CrabGroupModel(element.groupName, element.crabItems);
            self.crabGroups.push(newGroup);
        });
        // we're going to start with displaying the first one in our collection
        self.SetCurrentGroup(self.crabGroups[0].groupName);
    }
    self.SetupData();

}

var pageModel = new PageModel();
ko.applyBindings(pageModel);

