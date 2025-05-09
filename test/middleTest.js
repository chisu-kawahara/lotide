const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

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

