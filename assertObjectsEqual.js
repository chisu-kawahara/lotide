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

// Test cases
assertObjectsEqual({ a: "1", b: 2 }, { b: 2, a: "1" }); // ✅ Assertion Passed
assertObjectsEqual({ a: "1", b: 2 }, { a: "1", b: 3 }); // 🛑 Assertion Failed
assertObjectsEqual({ a: "1", b: "2" }, { a: "1", b: 2 }); // 🛑 Assertion Failed
assertObjectsEqual({ a: "1", b: 2 }, { a: "1", b: 2 }); // ✅ Assertion Passed
assertObjectsEqual({ a: "1", b: 2 }, { a: "1", b: 2, c: 3 }); // 🛑 Assertion Failed


module.exports = assertObjectsEqual;