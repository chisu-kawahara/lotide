const countLetters = require('../countLetters');

// TEST CODE
console.log(countLetters("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }
console.log(countLetters("lighthouse")); // Output: { l: 1, i: 1, g: 1, h: 1, t: 1, o: 1, u: 1, s: 1, e: 1 }

const result = countLetters('LHL');
assertEqual(result['L'], 2);
assertEqual(result['H'], 1);