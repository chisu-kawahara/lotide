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

const results = letterPositions("hello");
assertArraysEqual(results.e, [1]); // 'e' is at index 1
// You can add more test cases for other letters in "hello"
assertArraysEqual(results.h, [0]); // 'h' is at index 0
assertArraysEqual(results.l, [2, 3]); // 'l' is at indices 2 and 3
assertArraysEqual(results.o, [4]); // 'o' is at index 4
