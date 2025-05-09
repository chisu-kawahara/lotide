const assertEqual = require("../assertEqual");
const eqArrays = require("../assertArraysEqual");


// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["a", "b"], ["a", "b"]);
assertArraysEqual(["a", "b"], ["a", "c"]);
