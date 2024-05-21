// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// solution
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const arrFirst = s.split("");
  const arrSecond = t.split("");

  for (let i = 0; i < arrSecond.length; i++) {
    const index = arrFirst.indexOf(arrSecond[i]);
    if (index !== -1) {
      arrFirst.splice(index, 1);
    } else {
      return false;
    }
  }
  return true;
};

// imports
import { quantity, exampleDate, userData } from "../index.js";

// name inputs
const quantityInput = 2;
quantity(quantityInput, ["s", "t"]);

// Examples
// Example 1
let example = ["anagram", "nagaram"];
exampleDate(1, quantityInput, example, isAnagram);

// Example 2
example = ["rat", "car"];
exampleDate(2, quantityInput, example, isAnagram);

// Example 3
// example = [[0], 0, [1], 1];
// exampleDate(3, quantityInput, example, isAnagram);

// You can enter your data for verification
const result4 = document.querySelector(`#ex45`);
const result5 = document.querySelector(`#ex55`);

result4.addEventListener(
  "click",
  () => (result4.value = userData(4, quantityInput, isAnagram))
);
result5.addEventListener(
  "click",
  () => (result5.value = userData(5, quantityInput, isAnagram))
);
