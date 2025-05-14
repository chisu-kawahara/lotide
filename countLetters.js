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

module.exports = countLetters;