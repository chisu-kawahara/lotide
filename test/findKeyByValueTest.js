const findKeyByValue = require('../findKeyByValue');
const assertEqual = require("../assertEqual");


// Test code
const bestTVShowsByGenre = {
	sci_fi: "The Expanse",
	comedy: "Brooklyn Nine-Nine",
	drama: "The Wire",
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
// Test case for a value that doesn't exist
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

