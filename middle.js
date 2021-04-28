const middle = function(array) {
  const middleNum = Math.round(array.length / 2);
  const length = array.length;
  if (length <= 2) return [];
  if (length % 2 !== 0) {
    return [array[middleNum - 1]];
  } else return [array[middleNum - 1], array[middleNum]];
};

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

assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5]),  [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);