const countLetters = require('../countLetters');
const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual(countLetters("hello").h, 1); // h: 1
assertEqual(countLetters("hello").e, 1); // e: 1
assertEqual(countLetters("hello").l, 2); // l: 2
assertEqual(countLetters("hello").o, 1); // o: 1

