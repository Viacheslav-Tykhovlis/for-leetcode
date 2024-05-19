// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function (s) {
  let lastWord = "";

  if (s.trim().includes(" ")) {
    const arr = s.split(" ");
    // console.log("arr: ", arr);

    for (let i = arr.length - 1; i > 0; i--) {
      if (arr[i] !== "") {
        lastWord = arr[i];
        break;
      }
    }
  } else {
    lastWord = s.trim();
  }

  // console.log("lastWord: ", lastWord);
  const result = lastWord.length;
  // console.log("result: ", result);
  return result;
};

// imports
import { quantity, exampleDate, userData } from "../index.js";

// name inputs
quantity(1, ["s"]);

// Examples
// Example 1
let example = ["Hello World"];
exampleDate(1, 1, example, lengthOfLastWord);

// Example 2
example = ["   fly me   to   the moon  "];
exampleDate(2, 1, example, lengthOfLastWord);

// Example 3
example = ["a"];
exampleDate(3, 1, example, lengthOfLastWord);

// You can enter your data for verification
const result4 = document.querySelector(`#ex45`);
const result5 = document.querySelector(`#ex55`);

result4.addEventListener(
  "click",
  () => (result4.value = userData(4, 1, lengthOfLastWord))
);
result5.addEventListener(
  "click",
  () => (result5.value = userData(5, 1, lengthOfLastWord))
);

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
console.log(lengthOfLastWord("a"));
