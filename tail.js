const assertEqual = require('./assertEqual');

const tail = function (array) {
	return array.slice(1);
};

//Test cases
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
assertEqual(result[2], undefined); // ensure third element is undefined
assertEqual(result[3], undefined); // ensure fourth element is undefined

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

module.exports = tail;
