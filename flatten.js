const eqArrays = require("./eqArrays");
const assertEqual = require("./assertEqual");
const assertArraysEqual = require("./assertArraysEqual");

const flatten = function(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Concatenate the elements of the nested array
      result = result.concat(arr[i]);
    } else {
      // If it's not an array, add it directly to the result
      result.push(arr[i]);
    }
  }

  return result;
};

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
