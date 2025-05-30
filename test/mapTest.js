const map = require('../map.js');
const assertArraysEqual = require('../assertArraysEqual.js');

//Test codes
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
const results2 = map(words, word => word.length);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);
const results3 = map(words, word => word.toUpperCase());
assertArraysEqual(results3, ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']);
