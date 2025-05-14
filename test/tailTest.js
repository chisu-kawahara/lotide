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

//Test cases
asseertStrictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2); // ensure we get back two elements
assertStrictEqual(tail(["Hello", "Lighthouse", "Labs"])[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertStrictEqual(tail(["Hello", "Lighthouse", "Labs"])[1], "Labs"); // ensure second element is "Labs"
assertEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2); // ensure we get back two elements

const words = ["Hello", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3); // ensure original array is unchanged
assertEqual(words[0], "Hello"); // ensure first element is "Hello"
assertEqual(words[1], "Lighthouse"); // ensure second element is "Lighthouse"
assertEqual(words[2], "Labs"); // ensure third element is "Labs"

assertEqual(tail(["test"]).length, 0);
assertEqual(tail([]).length, 0);
assertEqual(tail([1, 2, 3]).length, 2); // ensure we get back two elements
assertEqual(tail([1, 2, 3])[0], 2); // ensure first element is 2
assertEqual(tail([1, 2, 3])[1], 3); // ensure second element is 3