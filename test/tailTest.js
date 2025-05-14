const assertEqual = require("../assertEqual");
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

assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
assertEqual(result[2], undefined); // ensure third element is undefined
assertEqual(result[3], undefined); // ensure fourth element is undefined
assertEqual(result[4], undefined); // ensure fifth element is undefined