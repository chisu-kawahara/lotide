const assertEqual = require("./assertEqual");


// The findKey function takes an object and a callback function as arguments.
// It iterates through the object's keys and values, applying the callback to each value.
// If the callback returns a truthy value for a value, it returns the corresponding key.
// If no key satisfies the callback, it returns undefined.
const findKey = function(obj, callback) {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key; // Return the first key where callback is truthy
    }
  }
};

module.exports = findKey;