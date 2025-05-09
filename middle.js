
const assertArraysEqual = require("../assertArraysEqual");

const middle = function (arr) {
	// Return an empty array if less than 3 elements
	if (arr.length < 3) {
		return [];
	}

	const middleIndex = Math.floor(arr.length / 2);

	// If the array has an odd number of elements, return the middle element
	if (arr.length % 2 !== 0) {
		return [arr[middleIndex]];
	}
	// If the array has an even number of elements, return the two middle elements
	else {
		return [arr[middleIndex - 1], arr[middleIndex]];
	}
};


module.exports = middle;