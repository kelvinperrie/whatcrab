
var PossibleCrabItem = function(crabItem) {
    var self = this;

    self.image = crabItem.image;
    self.name = crabItem.name;
    self.directToGroupName = crabItem.directToGroupName;
    self.idCharacteristics = crabItem.idCharacteristics;

    self.allIdCharacteristics = ko.computed(function() {
        if(!self.idCharacteristics) return;
        var all = self.idCharacteristics.join(", ");
        if(all) {
            all = all + ".";
        }
        return all;
    });
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
            console.log("pretend we have loaded the crab details RIGHT NOW");
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

