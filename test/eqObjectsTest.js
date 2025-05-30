const eqObjects = require('../eqObjects');
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

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

