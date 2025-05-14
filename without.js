const assertEqual = require("./assertEqual");
const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

// The function `without` takes two arrays as arguments: `array` and `itemsToRemove`.
const without = function(array, itemsToRemove) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (!itemsToRemove.includes(array[i])) {
      result.push(array[i]);
    }
  }

  return result;
};

//Test cases
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
// Make sure the original array is not modified
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
// Test with an empty array
assertArraysEqual(without([], [1]), []);
// Test with an empty itemsToRemove array
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);

module.exports = without;
