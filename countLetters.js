const assertEqual = require("./assertEqual");


const countLetters = function (str) {
  const letterCounts = {};

  for (const letter of str) {
    if (letter !== ' ') {
      if (letterCounts[letter]) {
        letterCounts[letter] += 1;
      } else {
        letterCounts[letter] = 1;
      }
    }
  }

  return letterCounts;
};

// TEST CODE
assertEqual(countLetters("hello").h, 1); // h: 1
assertEqual(countLetters("hello").e, 1); // e: 1
assertEqual(countLetters("hello").l, 2); // l: 2
assertEqual(countLetters("hello").o, 1); // o: 1
assertEqual(countLetters("lighthouse").l, 1); // l: 1
assertEqual(countLetters("").h, undefined); // empty string should not have any letters, undefined for h

module.exports = countLetters;