const assertEqual = require("./assertEqual");


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



module.exports = countLetters;