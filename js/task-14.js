// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

/**
 * @param {string[]} strs
 * @return {string}
 */

// solution
var longestCommonPrefix = function (strs) {
  if (!strs[0][0]) {
    return "";
  }

  if (strs.length === 1) {
    return strs[0];
  }

  let numberLetter = 0;
  let changeArr = [];
  let letterArr = [];

  function splitPrefix(arr) {
    letterArr = arr.map((elem) => elem[numberLetter]);
    // console.log("letterArr: ", letterArr);
    // console.log(
    //   "every: ",
    //   letterArr.every((el) => el === arr[0][numberLetter])
    // );

    if (
      letterArr.every((el) => el === arr[0][numberLetter]) &&
      letterArr[0] !== undefined
    ) {
      changeArr.push(letterArr[0]);
      letterArr = [];
      numberLetter++;

      // console.log("changeArr: ", changeArr);

      splitPrefix(arr);
    } else {
      return;
    }
  }

  splitPrefix(strs);

  return changeArr.length > 0 ? changeArr.join("") : "";
};

// imports
import { quantity, exampleDate, userData } from "../index.js";

// name inputs
quantity(1, ["strs"]);

// Examples
// Example 1
let example = [["flower", "flow", "flight"]];
exampleDate(1, 1, example, longestCommonPrefix);

// Example 2
example = [[""]];
exampleDate(2, 1, example, longestCommonPrefix);

// Example 3
example = [["a"]];
exampleDate(3, 1, example, longestCommonPrefix);

// You can enter your data for verification
const result4 = document.querySelector(`#ex45`);
const result5 = document.querySelector(`#ex55`);

result4.addEventListener(
  "click",
  () => (result4.value = userData(4, 1, longestCommonPrefix))
);
result5.addEventListener(
  "click",
  () => (result5.value = userData(5, 1, longestCommonPrefix))
);

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
// console.log(longestCommonPrefix([""]));
console.log(longestCommonPrefix(["a"]));
// console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"]));
