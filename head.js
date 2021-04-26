const head = function(array) {
  return array[0]
}

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`👎 👎 👎 Assertion Fail: ${actual} !== ${expected}`);
  } else {
    console.log(`👌 👌 👌 Assertion Passed: ${actual} === ${expected}`);
  }
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");