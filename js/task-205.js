// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isIsomorphic = function (s, t) {
  let arrS = [];
  let arrT = [];

  for (let i = 0; i < s.length; i++) {
    if (
      arrS.findIndex((elem) => elem === s[i]) === -1 &&
      arrT.findIndex((elem) => elem === t[i]) === -1
    ) {
      arrS.push(s[i]);
      arrT.push(t[i]);
      continue;
    } else {

      if (
        arrS.findIndex((elem) => elem === s[i]) !==
        arrT.findIndex((elem) => elem === t[i])
      ) {
        return false;
      }
    }
  }
  return true;
};

// console.log(isIsomorphic("egg", "add"));
// console.log(isIsomorphic("foo", "bar"));
// console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("badc", "baba"));
