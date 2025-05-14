const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});

//Test cases 
assert.strictEqual(middle([1, 2, 3]), [2]);
assert.strictEqual(middle([1, 2, 3, 4]), [2, 3]);
assert.strictEqual(middle([1, 2]), []);
assert.strictEqual(middle([1]), []);
assert.strictEqual(middle([1, 2, 3]), [2]);

//Test cases
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);

