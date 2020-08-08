## What's my crab.

This is a proof of concept to allow people with limited knowledge of crabs to be able to identify a crab. It uses a filtering system to narrow down the species based on a set of questions and answers. The crabs are assigned attributes and the user is asked questions in (hopefully) easily accessible language; based on the answers the possible matches of crabs are filtered down.

This is now integrated with netlify and is available at:
http://www.whatsmycrab.co.nz/

Here is the preview:
https://raw.githack.com/kelvinperrie/whatcrab/master/site/index.html


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

Things to do:
* tiles that get bigger if less crabs in the results
* when comparing crabs some way to view just the details that distinguish each one e.g. crab 1 has two teeth on shell, crab 2 has three teeth on shell
* some way to open the raw picture full size
* some filters should be hidden if they become not possible - for example if halfcrab is selected the pillbox crab filter should hide
* on a crab tile, add in ability to go left or right through images (click should open big image?)
* all the crab details need review. Terminology is inconsistent (e.g. teeth vs spikes vs notches), need to check with sources that I have the data right and if so put in references

