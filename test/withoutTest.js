const without = require("../without");
const assertArraysEqual = require("../assertArraysEqual");


//TEST cases
const words = ["hello", "world", "lighthouse"]
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
// Make sure the original array is not modified
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
// Test with an empty array
assertArraysEqual(without([], [1]), []);
// Test with an empty itemsToRemove array
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);