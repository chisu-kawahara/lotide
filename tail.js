const assertEqual = require('./assertEqual');


// The tail function takes an array as input and returns a new array that contains all elements of the input array except for the first one.
// It uses the slice method to create a shallow copy of the array starting from index 1.
const tail = function (array) {
	return array.slice(1);
};


module.exports = tail;
