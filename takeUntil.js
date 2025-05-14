const eqarrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      break; // stop collecting when callback returns truthy
    }
    results.push(item);
  }
  return results;
};

module.exports = takeUntil;
