const takeUntil = require('../takeUntil');

//Test codes
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1); 
// Expected output: [1, 2, 5, 7, 2]

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2); 
// Expected output: ["I've", "been", "to", "Hollywood"]
