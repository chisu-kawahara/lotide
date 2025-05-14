const eqArrays = require("./eqArrays");

// This function takes in two arrays and compares them for equality
// It uses the eqArrays function to check if the arrays are equal
// If they are equal, it logs a success message
// If they are not equal, it logs a failure message
const assertArraysEqual = function (actual, expected) {
	if (eqArrays(actual, expected)) {
		console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
	} else {
		console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
	}
};

module.exports = assertArraysEqual;
