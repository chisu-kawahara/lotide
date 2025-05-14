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

module.exports = flatten;