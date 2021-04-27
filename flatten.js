const flatten = function(array) {
  return array.flat();
};

const assertArraysEqual = function(actualArray, expectedArray) {
  if (!eqArrays(actualArray, expectedArray)) {
    console.log("Sadly not!");
  } else {
    console.log("Success!");
  }
};

const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]));