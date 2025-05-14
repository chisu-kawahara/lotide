const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

const assert = require('chai').assert;

//TEST CODE
describe("#middle", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
    assert.deepEqual(middle([1, 2]), []);
    assert.deepEqual(middle([1]), []);
    assert.deepEqual(middle([1, 2, 3]), [2]);
    assert.strictEqual(assertArraysEqual([1, 2], [2, 1]), false);
    assert.strictEqual(assertArraysEqual([1], [2]), false);
    assert.strictEqual(assertArraysEqual([], [1]), false);
    assert.strictEqual(assertArraysEqual([1], []), false);
  });
});

