const assertEqual = require("../assertEqual");
const tail = require('../tail');


//TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

describe("#tail", () => {
	it("returns 1 for [1, 2, 3]", () => {
		assert.strictEqual(tail["Hello", "Lighthouse", "Labs"]);
	});
	it("returns '5' for ['5']", () => {
		assert.strictEqual(tail([1, 2, 3]), [2]);;
	});
});

