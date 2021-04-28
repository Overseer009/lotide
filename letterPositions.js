const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (results[letter] === undefined) {
      results[letter] = [];
    }
    const currentLetter = results[letter];
    currentLetter.push(i);
  }
  return results;
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

assertArraysEqual(letterPositions('Banana').a, [ 1, 3, 5 ]);