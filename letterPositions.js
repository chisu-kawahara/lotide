const eqArrays = require ("./eqArrays");
const assertArraysEqual = require ("./assertArraysEqual");

// Function to find the positions of letters in a string
// The function takes a string as input and returns an object where each key is a letter
// and the value is an array of indices where that letter appears in the string
// The function iterates through the string, checking each character
// If the character is not a space, it checks if the letter already exists in the object
const letterPositions = function (str) {
	const positions = {};

	for (let i = 0; i < str.length; i++) {
		let letter = str[i];
		if (letter !== " ") {
			// Skip spaces
			if (positions[letter]) {
				positions[letter].push(i);
			} else {
				positions[letter] = [i];
			}
		}
	}

	return positions;
};


module.exports = letterPositions;