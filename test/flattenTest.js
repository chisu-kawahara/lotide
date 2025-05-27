const flatten = require("../flatten");
const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");
const assertArraysEqual = require("../assertArraysEqual");


// TEST cases
assertArraysEqual(flatten([1, 2, 3]), [1, 2, 3]); // Flattening a flat array, should return the same array
assertArraysEqual(flatten([["a", "b"], ["c", "d"], "e"]), [
	"a",
	"b",
	"c",
	"d",
	"e",
]); // Flatten nested arrays