// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.
// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
// Return k after placing the final result in the first k slots of nums.
// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

/**
 * @param {number[]} nums
 * @return {number}
 */

// solution
var removeDuplicates = function (nums) {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1] && nums[i] === nums[i + 2]) {
      continue;
    } else {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
};

// imports
import { quantity, exampleDate, userData } from "../index.js";

// name inputs
quantity(1, ["nums"]);

// Examples
// Example 1
let example = [[1, 1, 1, 2, 2, 3]];
exampleDate(1, 1, example, removeDuplicates);

// Example 2
example = [[0, 0, 1, 1, 1, 1, 2, 3, 3]];
exampleDate(2, 1, example, removeDuplicates);

// Example 3
example = [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 5, 6]];
exampleDate(3, 1, example, removeDuplicates);

// You can enter your data for verification
const result4 = document.querySelector(`#ex45`);
const result5 = document.querySelector(`#ex55`);

result4.addEventListener(
  "click",
  () => (result4.value = userData(4, 1, removeDuplicates))
);
result5.addEventListener(
  "click",
  () => (result5.value = userData(5, 1, removeDuplicates))
);

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 5, 6]));
