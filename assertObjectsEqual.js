const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`🔥 🔥 🔥 that match is LIT: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🧩 🧩 🧩 hmmm... puzzling: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const eqObjects = function(object1, object2) {
  let keysOne = Object.keys(object1);
  let keysTwo = Object.keys(object2);
  if (keysOne.length === keysTwo.length) {
    for (let key in object1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
  return false;
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


const cd = {c: "1", d: ["2", 3]};
const cd1 = {d: ["2", 3], c: "1"};
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2)
assertObjectsEqual(cd, cd1)