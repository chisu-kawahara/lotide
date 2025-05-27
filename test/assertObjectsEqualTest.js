const assertObjectsEqual = require("../assertObjectsEqual");

// Test cases
assertObjectsEqual({ a: "1", b: 2 }, { b: 2, a: "1" }); // ✅ Assertion Passed
assertObjectsEqual({ a: "1", b: 2 }, { a: "1", b: 2 }); // ✅ Assertion Passed
