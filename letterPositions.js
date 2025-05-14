const eqArrays = require ("./eqArrays");
const assertArraysEqual = require ("./assertArraysEqual");


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


// Test cases
const results = letterPositions("hello");
assertArraysEqual(results.e, [1]); // 'e' is at index 1
// You can add more test cases for other letters in "hello"
assertArraysEqual(results.h, [0]); // 'h' is at index 0
assertArraysEqual(results.l, [2, 3]); // 'l' is at indices 2 and 3
assertArraysEqual(results.o, [4]); // 'o' is at index 4


module.exports = letterPositions;