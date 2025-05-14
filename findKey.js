const assertEqual = require("./assertEqual");

const findKey = function(obj, callback) {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key; // Return the first key where callback is truthy
    }
  }
  return undefined; // Return undefined if no matching key is found
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