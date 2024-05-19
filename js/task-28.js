// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
// haystack and needle consist of only lowercase English characters.
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// solution
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

// imports
import { quantity, exampleDate, userData } from "../index.js";

// name inputs
quantity(2, ["haystack", "needle"]);

// Examples
// Example 1
let example = ["sadbutsad", "sad"];
exampleDate(1, 2, example, strStr);

// Example 2
example = ["leetcode", "leeto"];
exampleDate(2, 2, example, strStr);

// Example 3
// example = [];
// exampleDate(3, 2, example, strStr);

// You can enter your data for verification
const result4 = document.querySelector(`#ex45`);
const result5 = document.querySelector(`#ex55`);

result4.addEventListener(
  "click",
  () => (result4.value = userData(4, 2, strStr))
);
result5.addEventListener(
  "click",
  () => (result5.value = userData(5, 2, strStr))
);

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));
