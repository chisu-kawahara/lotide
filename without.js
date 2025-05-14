const assertEqual = require("./assertEqual");
const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

// The function `without` takes two arrays as arguments: `array` and `itemsToRemove`.
const without = function(array, itemsToRemove) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    let shouldRemove = false;

    for (let j = 0; j < itemsToRemove.length; j++) {
      if (array[i] === itemsToRemove[j]) {
        shouldRemove = true;
        break;
      }
    }

    if (!shouldRemove) {
      result.push(array[i]);
    }
  }

  return result;
};
//TEST CODE
const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);

module.exports = without;
