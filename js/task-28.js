// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
// haystack and needle consist of only lowercase English characters.
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));
