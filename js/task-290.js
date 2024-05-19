// Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

// solution
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

// imports
import { quantity, exampleDate, userData } from "../index.js";

// name inputs
const quantityInput = 2;
quantity(quantityInput, ["pattern", "s"]);

// Examples
// Example 1
let example = ["abba", "dog cat cat dog"];
exampleDate(1, quantityInput, example, wordPattern);

// Example 2
example = ["abba", "dog cat cat fish"];
exampleDate(2, quantityInput, example, wordPattern);

// Example 3
example = ["aaa", "aa aa aa aa"];
exampleDate(3, quantityInput, example, wordPattern);

// You can enter your data for verification
const result4 = document.querySelector(`#ex45`);
const result5 = document.querySelector(`#ex55`);

result4.addEventListener(
  "click",
  () => (result4.value = userData(4, quantityInput, wordPattern))
);
result5.addEventListener(
  "click",
  () => (result5.value = userData(5, quantityInput, wordPattern))
);

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("abba", "dog cat cat fish"));
console.log(wordPattern("aaaa", "dog cat cat dog"));
console.log(wordPattern("aaa", "aa aa aa aa"));
