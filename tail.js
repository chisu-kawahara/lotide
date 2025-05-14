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


module.exports = tail;
