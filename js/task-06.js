// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

var canConstruct = function (ransomNote, magazine) {
  let ransom = ransomNote.split("");
  let magaz = magazine.split("");
  let result = true;

  for (const item of ransom) {
    const index = magaz.findIndex((elem) => elem === item);
    if (index !== -1) {
      magaz.splice(index, 1);
      continue;
    } else {
      result = false;
      break;
    }
  }
  return result;
};

console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));
