const countLetters = function(string) {
  let letters = {};
  for (let words of string) {
    if (letters[words] === undefined) {
      letters[words] = 1;
    } else letters[words] += 1;
  }
  return letters;
};

console.log(countLetters('apple'));