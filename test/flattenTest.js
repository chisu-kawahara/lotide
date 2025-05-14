const flatten = require("../flatten");
const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");
const assertArraysEqual = require("../assertArraysEqual");


// TEST CODE
assertArraysEqual(flatten([1, 2, 3]), [1, 2, 3]); // Flattening a flat array, should return the same array
assertArraysEqual(flatten([["a", "b"], ["c", "d"], "e"]), [
	"a",
	"b",
	"c",
	"d",
	"e",
]); // Flatten nested arrays
assertArraysEqual(flatten([1, [2, 3], [4, [5, 6]], 7]), [1, 2, 3, 4, [5, 6], 7]); // Deeply nested arrays