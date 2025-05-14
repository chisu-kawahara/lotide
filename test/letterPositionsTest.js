const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const letterPositions = require('../letterPositions');



// Test codes
const results = letterPositions("hello");
assertArraysEqual(results.e, [1]); // 'e' is at index 1
// You can add more test cases for other letters in "hello"
assertArraysEqual(results.h, [0]); // 'h' is at index 0
assertArraysEqual(results.l, [2, 3]); // 'l' is at indices 2 and 3
assertArraysEqual(results.o, [4]); // 'o' is at index 4
