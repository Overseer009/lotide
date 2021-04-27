const without = function(source, removables) {
  let outputArray = [];
  for (let elems of source) {
    if (!removables.includes(elems)) {
      outputArray.push(elems);
    }
  }
  return outputArray;
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

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);