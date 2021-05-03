const middle = function(array) {
  const middleNum = Math.round(array.length / 2);
  const length = array.length;
  if (length <= 2) return [];
  if (length % 2 !== 0) {
    return [array[middleNum - 1]];
  } else return [array[middleNum - 1], array[middleNum]];
};

module.exports = middle;
