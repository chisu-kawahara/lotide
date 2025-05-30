const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");


const eqObjects = function (object1, object2) {
	const keys1 = Object.keys(object1);
	const keys2 = Object.keys(object2);

	// Check if number of keys are different
	if (keys1.length !== keys2.length) {
		return false;
	}

	// Loop through the keys in object1
	for (const key of keys1) {
		const val1 = object1[key];
		const val2 = object2[key];

		// If values are arrays, use eqArrays to compare
		if (Array.isArray(val1) && Array.isArray(val2)) {
			if (!eqArrays(val1, val2)) {
				return false;
			}
		} else {
			// Compare primitive values directly
			if (val1 !== val2) {
				return false;
			}
		}
	}

	return true; // all keys and values matched
};



// Test Cases (Primitives)
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = {
	size: "medium",
	color: "red",
	sleeveLength: "long",
};
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

// Test Cases (Arrays)
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
	size: "medium",
	colors: ["red", "blue"],
};
assertEqual(
	eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),
	true
);

const longSleeveMultiColorShirtObject = {
	size: "medium",
	colors: ["red", "blue"],
	sleeveLength: "long",
};
assertEqual(
	eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject),
	false
);

module.exports = eqObjects;
