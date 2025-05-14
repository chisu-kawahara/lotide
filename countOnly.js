const assertEqual = require("./assertEqual");

const countOnly = function (allItems, itemsToCount) {
	const results = {};
	//loop through all items in the array
	//check if the item is in the itemsToCount object
	//if it is, check if it exists in the results object
	//if it does, increment the count
	//if it doesn't, add it to the results object with a count of 1
	//return the results object

  for (const item of allItems) {
    if (itemsToCount[item]) {
		  if (results[item]) {
			results[item] += 1;
	  	} 
      else {
			results[item] = 1;
		  }
    }
  }
    return results;
};

const firstNames = [
	"Karl",
	"Salima",
	"Agouhanna",
	"Fang",
	"Kavith",
	"Jason",
	"Salima",
	"Fang",
	"Joe",
];

const result1 = countOnly(firstNames, {
	Jason: true,
	Karima: true,
	Fang: true,
	Agouhanna: false,
});

module.exports = countOnly;