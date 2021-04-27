const assertArraysEqual = function(givenArr, expectedArr) {
  if (eqArrays(givenArr, expectedArr) === true) {
    console.log('🙌 🙌 🙌 Hazza! It is a match!');
  } else {
    console.log('🤌 🤌 🤌  why you not match?');
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

assertArraysEqual([1, 2, 3], [1, 4, 3]);