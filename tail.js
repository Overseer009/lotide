const tail = function(array) {
  let tailArray = [];
  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
};

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`👎 👎 👎 Assertion Fail: ${actual} !== ${expected}`);
  } else {
    console.log(`👌 👌 👌 Assertion Passed: ${actual} === ${expected}`);
  }
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);