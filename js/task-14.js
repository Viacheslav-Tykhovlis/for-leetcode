// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

/**
 * @param {string[]} strs
 * @return {string}
 */

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
    console.log("arr: ", arr);
    letterArr = arr.map((elem) => elem[numberLetter]);
    console.log("letterArr: ", letterArr);
    console.log(
      "every: ",
      letterArr.every((el) => el === arr[0][numberLetter])
    );

    if (
      letterArr.every((el) => el === arr[0][numberLetter]) &&
      letterArr[0] !== undefined
    ) {
      changeArr.push(letterArr[0]);
      letterArr = [];
      numberLetter++;

      console.log("changeArr: ", changeArr);

      splitPrefix(arr);
    } else {
      return;
    }
  }

  splitPrefix(strs);

  return changeArr.length > 0 ? changeArr.join("") : "";
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));
// console.log(longestCommonPrefix([""]));
// console.log(longestCommonPrefix(["a"]));
// console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"]));
