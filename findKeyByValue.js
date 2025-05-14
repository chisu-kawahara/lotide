const assertEqual = require("./assertEqual");

// Function to find the first key in an object that has a given value
// The function takes an object and a value as arguments
// It returns the first key that matches the value, or undefined if no match is found
// The function uses Object.keys() to get an array of keys from the object
// It then loops through the keys and checks if the value at that key matches the given value
// If a match is found, it returns the key
// If no match is found, it returns undefined

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



module.exports = findKeyByValue;