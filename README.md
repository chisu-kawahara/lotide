# Lotide

Lotide is a utility library built in JavaScript, offering a collection of functions to simplify common programming tasks, particularly around arrays, objects, and strings. It mimics some of the core functionality of the Lodash library but is implemented from scratch to demonstrate foundational JavaScript concepts.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @chisukawahara/lotide`

**Require it:**

`const _ = require('@chisukawahara/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head`: This function is used to retrieve the first element from the array.
- `tail`: This function is used to retrieve every element except the head (first element) of the arra.
- `middle`: This function is useed to return an array with only the middle element(s) of the provided array.
- `assertEqual`: This function was implemented to show success / failure messages printed to the console, to check if our functions are behaving as expected. It compares primitive types (like numbers and strings).
- `assertArraysEqual`: This function was used to assert that two arrays are equal.
- `assertObjectsEqual`: This function was implemented to test functions that return objects.
- `eqArrays`: This function was used to compare two arrays for a match.
- `eqObjects`: This function was implemented to test if two objects are a match(equal).
- `countLetters`: This function was used to return an object where each unique character is a key, and its corresponding value is the number of times that character appears in the string.
- `countOnly`: This function takes in a collection of items and return counts for a specific subset of those items.
- `findKey`: This function was used to search through an object and identify the first key that matches a specific condition defined by a callback function.
- `findKeyByValue`: This function was used to search through an object and return the first key that corresponds to a specified value. 
- `letterPositions`: This function was implemented to return all the indices (zero-based positions) in the string where each character is found.
- `takeUntil`: This function was implemented to collect items from a provided array until the callback provided returns a truthy value.
- `without`: This function was used to return a subset of a given array, removing unwanted elements.
- `flatten`: This function was implemented to simplify arrays by removing one level of nesting.
- `map`: This function was used to perform element-wise transformations - to return a new array based on the results of the callback function.
