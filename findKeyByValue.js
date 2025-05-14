const assertEqual = require("./assertEqual");


const findKeyByValue = function (object, value) {
	const keys = Object.keys(object); // Get all the keys first

	for (const key of keys) {
		//loop over the keys
		if (object[key] === value) {
			return key;
		}
	}
	return undefined;
};



module.exports = findKeyByValue;