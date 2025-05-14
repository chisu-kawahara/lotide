
//middle function to find the middle element(s) of an array
// The function takes an array as input and returns the middle element(s) of the array.
// If the array has an odd number of elements, it returns the middle element.
// If the array has an even number of elements, it returns the two middle elements.
// The function first checks if the array has less than 3 elements.
// If so, it returns an empty array.

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