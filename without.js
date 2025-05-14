const assertEqual = require("./assertEqual");
const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

// The function `without` takes two arrays as arguments: `array` and `itemsToRemove`.
// It returns a new array that contains all elements from `array` except those that are present in `itemsToRemove`.
const without = function(array, itemsToRemove) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (!itemsToRemove.includes(array[i])) {
      result.push(array[i]);
    }
  }

  return result;
};


module.exports = without;
