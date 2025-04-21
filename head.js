const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
}
assertEqual ("LighthouseLabs", "Bootcamp");
assertEqual ("LighthouseLabs", "LighthouseLabs");
assertEqual (1, 1);
assertEqual (1, 2);

const head = function(array) {
  if (array.length === 0) {
    return undefined;
  } else {
    return array[0];
  }
}
assertEqual(head([5, 6, 7]), 5); 
assertEqual(head([5]), 5);
assertEqual(head([]), undefined); 
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");