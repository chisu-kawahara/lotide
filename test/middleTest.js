const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");
const middle = require("../middle");

const assert = require('chai').assert;

assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
assert.deepEqual(middle([1, 2, 3]), [2]);
assert.deepEqual(middle([1]), []);
assert.deepEqual(middle([1, 2]), []);
assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);


describe("#middle", () => {
  it("returns the middle of an array", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
    assert.deepEqual(middle([1, 2, 3]), [2]);
    assert.deepEqual(middle([1]), []);
  });
});

//Test cases
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), []);
eqArrays(middle([1, 2, 3]), [2]);
eqArrays(middle([1, 2, 3, 4]), [2, 3]);
eqArrays(middle([1, 2]), []);
eqArrays(middle([1]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);

