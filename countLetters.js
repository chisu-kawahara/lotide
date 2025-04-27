const assertEqual = function (actual, expected) {
	if (actual === expected) {
		console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
	} else {
		console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
	}
};

const countLetters = function (str) {
	const letterCounts = {};

	for (const letter of str) {
		if (letterCounts[letter]) {
			letterCounts[letter] += 1;
		} else {
			letterCounts[letter] = 1;
		}
	}
	return letterCounts;
};

// TEST CODE
console.log(countLetters("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }
console.log(countLetters("lighthouse")); // Output: { l: 1, i: 1, g: 1, h: 1, t: 1, o: 1, u: 1, s: 1, e: 1 }
