const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");
const util = require("util");

const assertObjectsEqual = function(actual, expected) {
  const inspect = util.inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


module.exports = assertObjectsEqual;