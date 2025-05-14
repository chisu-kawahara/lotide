const assertEqual = require("./assertEqual");
const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

// The function `without` takes two arrays as arguments: `array` and `itemsToRemove`.
const without = function (array, itemsToRemove) {
	return array.filter((item) => !itemsToRemove.includes(item));
};

//TEST CODE
const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);

module.exports = without;
