var FilterValueModel = function(filterValue) {
    var self = this;

    self.text = filterValue.text;
    self.key = filterValue.key;
    self.image = filterValue.image;
    self.activated = ko.observable(false);
}

var FilterModel = function(filter, pageModel) {
    var self = this;

    self.pageModel = pageModel; // let's loop that puppy
    self.visible = ko.observable(false);        // is this filter visible
    self.key = filter.key;                      // the key for the filter e.g. carapaceShape
    self.visibleWhen = filter.visibleWhen;      // an object the constraints that make this filter visible (i.e. if another filter has to have something selected for this one to show)
    self.possibleValues = [];                   // an array of filterValueModels which describe the options that can be selected for the filter
    for(var i = 0; i < filter.possibleValues.length; i++) {
        self.possibleValues.push(new FilterValueModel(filter.possibleValues[i]));
    }
    self.question = filter.question;            // the question for the filter e.g. "What shape is the shell of the crab"
    self.helpText = filter.helpText;            // some text that expands on the filter's question
    self.showHelpText = ko.observable(false);

    // check to see if there are any activated values on this filter (i.e. something is selected on the filter)
    self.hasAnyValueActivated = function() {
        for(var i = 0; i < filter.possibleValues.length; i++) {
            if(filter.possibleValues.activated() === true) {
                return true;
            }
        }
        return false;
    }

    // check to see if a particular value has been activated
    self.checkValueIsActivated = function(value) {
        for(var i = 0; i < self.possibleValues.length; i++) {
            if(self.possibleValues[i].key === value) {
                return self.possibleValues[i].activated();
            }
        }
        return false;
    }

    // get an array of all the values for the activated filter options (i.e. all the selected values)
    self.getActiveValues = function() {
        var activeValues = [];
        for(var i = 0; i < self.possibleValues.length; i++) {
            if(self.possibleValues[i].activated()) {
                activeValues.push(self.possibleValues[i].key);
            }
        }
        return activeValues;
    }

    // check to see if this filter should be visible
    self.checkVisibility = function() {

    }
}

var CrabModel = function(crab) {
    var self = this;

    self.commonName = crab.commonName || "No common name";      // the name the crab is known by
    self.scientificName = crab.scientificName;                  // the stupid scientific name
    self.attributes = crab.attributes;                          // an array of attributes that describe the crab e.g. [ { key : "carapaceShape",  values : ["oval"] } ]
    self.images = crab.images;
    self.currentImageIndex = ko.observable(0);
    self.hiddenByFilters = ko.observableArray();                // an obs array of the filter keys that have caused this crab to be hidden

    self.visible = ko.computed(function() {
        return self.hiddenByFilters().length === 0;
    });
    self.currentImage = ko.computed(function() {
        if(!self.images || self.images.length === 0) {
            return null;
        }
        return self.images[self.currentImageIndex()];
    });
    self.showNextImage = function() {
        self.currentImageIndex(self.currentImageIndex()+1);
        if(self.currentImageIndex() >= self.images.length) {
            self.currentImageIndex(0);
        }
    }

    // see if the crab contains some values for a specific filter key
    self.getValuesForAttribute = function(key) {
        for(var i = 0; i < self.attributes.length; i++) {
            if(self.attributes[i].key === key) {
                return self.attributes[i].values;
            }
        }
        // we don't have an attribute that matches the filter key
        return null;
    }
}

var PageModel = function() {

    var self = this;
    self.crabData = ko.observableArray();
    self.filters = ko.observableArray();
    self.filterInfoShown = ko.observable(false);
    
    // self.crabDataFiltered = ko.computed(function(){
    //     return self.crabData().filter(
    //       function(item){
    //         //return (self.filter().length == 0 || location.title.toLowerCase().includes(self.filter().toLowerCase()));
    //         return true;
    //         // for each attribute associated with this crab, see if a filter has been set
    //         for(var i = 0; i < self.possibleValues.length; i++) {

    //         }
    //       }
    //     );
    //   });

    self.shownCrabCount = ko.computed(function() {

    });

    self.filterValueChangedEvent = function(filterThatChanged) {
        self.checkFilterVisibility();
        self.checkCrabVisibilityDueToFilterChange(filterThatChanged);
    };

    // go through each filter and determine whether is should be visible or not
    self.checkFilterVisibility = function() {
        for(var i = 0; i < self.filters().length; i ++) {
            var filterToCheck = self.filters()[i];
            if(filterToCheck.visibleWhen) {
                console.log("found visible when of ")
                console.log(filterToCheck.visibleWhen);
                var keyToCheck = filterToCheck.visibleWhen.key;
                var otherFilter = self.findFilterByKey(keyToCheck);
                if(otherFilter) {
                    console.log("found other filter")
                    var activated = otherFilter.checkValueIsActivated(filterToCheck.visibleWhen.value);
                    filterToCheck.visible(activated);

                } else {
                    // this is a weird situation where the filter is dependant on another but we couldn't find that other ...
                    filterToCheck.visible(false);
                }
            } else {
                // this filter has not constraints on visibility so just show it
                filterToCheck.visible(true);
            }
        }
    };

    // good name, good work kelvin
    self.checkCrabVisibilityDueToFilterChange = function(filterThatChanged) {
        // get the values that are set on the filter
        var activeValues = filterThatChanged.getActiveValues();
        console.log(activeValues);
        // for each crab, check to see if this filter change effects visibility
        crabLoop:for(var i = 0; i < self.crabData().length; i ++) {
            // get the values on the crab for this attribute/key
            var crabValues = self.crabData()[i].getValuesForAttribute(filterThatChanged.key);
            // if no values are set on the filter, then this filter won't stop the crab being visible
            if(activeValues.length == 0) {
                self.crabData()[i].hiddenByFilters.remove(filterThatChanged.key);
                continue;
            }

            // if the crab has no values for this, but something is set on the filter, then the crab ain't visible. sorry crab.
            if(!crabValues && activeValues.length > 0) {
                if(!self.crabData()[i].hiddenByFilters().includes(filterThatChanged.key)) {
                    self.crabData()[i].hiddenByFilters.push(filterThatChanged.key)
                }
                continue;
            }

            // the crab has to have at least one of the activated values on the filter
            var matchedAValue = false;
            console.log("checking to see if crab has one of the active values")
            for(var x = 0; x < activeValues.length; x ++) {
                console.log("checking to see if crab has " + activeValues[x]);
                if(crabValues.includes(activeValues[x])) {
                    console.log("it does!")
                    matchedAValue = true;
                } else {
                    console.log("it does NOT!")
                    
                }
            }

            if(matchedAValue) {
                // crab has a value that was set for this filter, so should be visible
                self.crabData()[i].hiddenByFilters.remove(filterThatChanged.key);
            } else {
                // crab does not have one of the set values for this filter, so should not be visible
                // only add this filter to visibilty blocking on the crab if not already there; could be there due to another option?
                if(!self.crabData()[i].hiddenByFilters().includes(filterThatChanged.key)) {
                    self.crabData()[i].hiddenByFilters.push(filterThatChanged.key)
                }
            }

        }
    }

    self.findFilterByKey = function(key) {
        var match = ko.utils.arrayFirst(self.filters(), function(item) {
            return item.key == key;
        });
        return match;
    }

    self.initialize = function() {
        for(var i = 0; i < crabData.length; i++) {
            self.crabData.push(new CrabModel(crabData[i]));
        }
        for(var i = 0; i < filterData.length; i++) {
            self.filters.push(new FilterModel(filterData[i], self));
        }
        self.checkFilterVisibility();
    }
    self.initialize();
}
var pageModel = new PageModel();
ko.applyBindings(pageModel);

