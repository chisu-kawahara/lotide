const assertEqual = require("./assertEqual");


// The findKey function takes an object and a callback function as arguments.
// It iterates through the object's keys and values, applying the callback to each value.
// If the callback returns a truthy value for a value, it returns the corresponding key.
const findKey = function(obj, callback) {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key; // Return the first key where callback is truthy
    }
  }
};

// Test cases
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2), "noma"); // Expected output: "noma"

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 4), undefined); // Expected output: undefined

module.exports = findKey;