module.exports = function reverse(n) {
  // throw new Error('Not implemented')
  const num = n >= 0 ? n : -1 * n;
  const arr = num.toString().split('');
  return Number(arr.reverse().join(''));
};
