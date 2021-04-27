//create a function that checks if you array are equal
const eqArrays = function(firstArray, secondArray) {
  //make sure that the arrays have the same length
  if (firstArray.length !== secondArray.length) {
    //if they are not return false
    return false;
  }
  //loop through the the first array
  for (let i = 0; i < firstArray.length; i++) {
    //match the elements of the first array to those of the second
    if (firstArray[i] !== secondArray[i]) {
      //if they don't return false
      return false;
    }
  }
  //outside of the loop, return true for all other conditions
  return true;
};

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`👎 👎 👎 Assertion Fail: ${actual} !== ${expected}`);
  } else {
    console.log(`👌 👌 👌 Assertion Passed: ${actual} === ${expected}`);
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);