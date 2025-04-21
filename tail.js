const tail = function (array) {
	newTail = array.slice(1);
	return newTail;
};

console.log(tail([1, 2, 3, 4]));
console.log(tail(["a", "b", "c"]));
console.log(tail([]));
console.log(newTail);
