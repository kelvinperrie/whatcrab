## What's my crab.

This is a proof of concept to allow people with limited knowledge of crabs to be able to identify a crab. It uses a filtering system to narrow down the species based on a set of questions and answers. The crabs are assigned attributes and the user is asked questions in (hopefully) easily accessible language; based on the answers the possible matches of crabs are filtered down.

This is now integrated with netlify and is available at:
http://www.whatsmycrab.co.nz/

Here is the preview:
https://raw.githack.com/kelvinperrie/whatcrab/master/site/index.html

### Examples:

Front page containing filters and displaying matching crabs:

![Example 1](examples/example04-filtering.png?raw=true "Example of front page")

Comparing crab details:

![Example 2](examples/example05-viewingdetails.png?raw=true "Example of comparing details")

Filters in action:

![Example 3](examples/example01-filters.gif?raw=true "Filters in action")


Opening details to compare crabs:

![Example 4](examples/example02-details.gif?raw=true "Opening details")


Comparing crabs:

![Example 5](examples/example03-details.gif?raw=true "Comparing crab details")

### Data structure

Filter (aka question) and crab data is stored in JSON files. The JSON files are read in and the filters and crabs populated based on the contents of those files. Each filter has a key and a set of possible options that can be set for it. Each crab contains the relevant filter keys and the options that match for it. 

For example, the question/filter asking about shell shape of the crab has a key of 'carapaceShape' along with the options of 'triangle', 'round', 'square', 'oval' and 'other'. 
The data on the Red Rock Crab then lists the 'carapaceShapre' filter key and says that the options that match for it are 'round' and 'square'; meaning that if the user has responded that the shell shape is round or square then the Red Rock Crab will show. Any other response and the Red Rock Crab will be hidden (i.e. if they answer 'oval' the Red Rock Crab is hidden).

The file called whatcrab-filterdata.js contains an array of filter information used to construct all of the filters/questions. It lives here:
https://github.com/kelvinperrie/whatcrab/blob/master/site/js/whatcrab-filterdata.js

A breakdown of a single filter:
![Example 6](examples/example06-filterdata.png?raw=true "filter data explaination")

The file called whatcrab-crabdata.js contains an array of crab information used to construct all of the possible crab matches. It lives here:
https://github.com/kelvinperrie/whatcrab/blob/master/site/js/whatcrab-crabdata.js

A crab is described like this:
![Example 7](examples/example07-crabdata.png?raw=true "crab data explaination")

### Things to do:
* tiles that get bigger if less crabs in the results
* when comparing crabs some way to view just the details that distinguish each one e.g. crab 1 has two teeth on shell, crab 2 has three teeth on shell
* on a crab tile, add in ability to go left or right through images (click should open big image?)

