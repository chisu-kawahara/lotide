//const assertEqual = require("../assertEqual");
const tail = require('../tail');
const assert = require('chai').assert;


//TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assert.strictEqual(result.length, 2); // ensure we get back two elements
assert.strictEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assert.strictEqual(result[1], "Labs"); // ensure second element is "Labs"

describe("#tail", () => {
  it("returns the correct tail of the array", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2);
    assert.strictEqual(result[0], "Lighthouse");
    assert.strictEqual(result[1], "Labs");
  });
});