const assertEqual = require("../assertEqual");


const tail = function (array) {
	return array.slice(1);
};

//TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
console.log(tail([1, 2, 3, 4]));
console.log(tail(["a", "b", "c"]));