const assertEqual = require("./assertEqual");


const findKeyByValue = function (object, value) {
	const keys = Object.keys(object); // Get all the keys first

	for (const key of keys) {
		//loop over the keys
		if (object[key] === value) {
			return key;
		}
	}
	return undefined;
};

const bestTVShowsByGenre = {
	sci_fi: "The Expanse",
	comedy: "Brooklyn Nine-Nine",
	drama: "The Wire",
};

// Test cases
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
// Test case for a value that doesn't exist
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;