


/*
Make the function compare the two values it takes in and print out a message telling us if they match or not.
If the values match, it should print (console.log) the following: Assertion Passed: [actual] === [expected] (but with the values filled in)
Otherwise it should print (console.log) the following: Assertion Failed: [actual] !== [expected] (but with the values filled in)
*/
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
