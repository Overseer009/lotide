const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`👎 👎 👎 Assertion Fail: ${actual} !== ${expected}`);
  } else {
    console.log(`👌 👌 👌 Assertion Passed: ${actual} === ${expected}`);
  }
};

module.exports = assertEqual;
