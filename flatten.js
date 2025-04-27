const assertArraysEqual = function (actual, expected) {
	if (eqArrays(actual, expected)) {
		console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
	} else {
		console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
	}
};

const assertEqual = function (actual, expected) {
	if (actual === expected) {
		console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
	} else {
		console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
	}
};

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

const flatten = function (arr) {
	let result = [];

	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			// If the element is an array, recursively flatten it
			result = result.concat(flatten(arr[i]));
		} else {
			// If it's not an array, add it to the result
			result.push(arr[i]);
		}
	}

	return result;
};

// TEST CODE
assertArraysEqual(flatten([1, 2, 3]), [1, 2, 3]); // Flattening a flat array, should return the same array
assertArraysEqual(flatten([["a", "b"], ["c", "d"], "e"]), [
	"a",
	"b",
	"c",
	"d",
	"e",
]); // Flatten nested arrays
assertArraysEqual(flatten([1, [2, 3], [4, [5, 6]], 7]), [1, 2, 3, 4, 5, 6, 7]); // Deeply nested arrays
