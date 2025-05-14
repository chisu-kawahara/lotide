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


module.exports = without;
