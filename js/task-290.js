// Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const keys = [...pattern];
  const values = s.split(" ");

  if (keys.length !== values.length) {
    return false;
  }

  const check = {};

  for (let i = 0; i < keys.length; i++) {
    if (keys.indexOf(keys[i]) === i && values.indexOf(values[i]) === i) {
      check[keys[i]] = values[i];
    } else if (values[i] !== check[keys[i]]) {
      return false;
    }
  }
  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("abba", "dog cat cat fish"));
console.log(wordPattern("aaaa", "dog cat cat dog"));
console.log(wordPattern("aaa", "aa aa aa aa"));
