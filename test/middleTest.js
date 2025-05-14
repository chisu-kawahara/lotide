const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

const assert = require('chai').assert;

describe("#middle", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
    assert.deepEqual(middle([1, 2]), []);
    assert.deepEqual(middle([1]), []);
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
});

//Test cases
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);

