// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

/**
 * @param {number[]} nums
 * @return {number}
 */

// solution
var removeDuplicates = function (nums) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
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
let example = [[1, 1, 2]];
exampleDate(1, 1, example, removeDuplicates);

// Example 2
example = [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]];
exampleDate(2, 1, example, removeDuplicates);

// Example 3
example = [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5]];
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

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5]));
