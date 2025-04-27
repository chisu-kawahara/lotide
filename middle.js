const eqArrays = function (arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
	}
	return true;
};

const assertArraysEqual = function (actual, expected) {
	if (eqArrays(actual, expected)) {
		console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
	} else {
		console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
	}
};

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

console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([]));
console.log(middle([5, 10, 15, 20, 25]));
