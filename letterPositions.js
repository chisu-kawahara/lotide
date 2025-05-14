const eqArrays = require ("./eqArrays");
const assertArraysEqual = require ("./assertArraysEqual");


const letterPositions = function (str) {
	const positions = {};

	for (let i = 0; i < str.length; i++) {
		const letter = str[i];

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