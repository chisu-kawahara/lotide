const assertEqual = require("../assertEqual");
const tail = require('../tail');
const assert = require('chai').assert;

// TEST CODE
describe("#tail", () => {
  it("returns the correct tail of the array", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2); // ensure we get back two elements
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[0], "Lighthouse"); // ensure first element is "Lighthouse"
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[1], "Labs"); // ensure second element is "Labs"
    assert.strictEqual(tail(["test"]).length, 0);
    assert.strictEqual(tail([]).length, 0);
    assert.strictEqual(tail([1, 2, 3]).length, 2); // ensure we get back two elements
    assert.strictEqual(tail([1, 2, 3])[0], 2); // ensure first element is 2
    assert.strictEqual(tail([1, 2, 3])[1], 3); // ensure second element is 3
});
});
