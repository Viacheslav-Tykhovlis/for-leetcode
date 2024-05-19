// Given an array nums of size n, return the majority element.
//       The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */

// solution
var majorityElement = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    } else {
      const count = nums.filter((elem) => elem === nums[i]);

      if (count.length > nums.length / 2) {
        return nums[i];
      }
    }
  }
};

// imports
import { quantity, exampleDate, userData } from "../index.js";

// name inputs
quantity(1, ["nums"]);

// Examples
// Example 1
let example = [[3, 2, 3]];
exampleDate(1, 1, example, majorityElement);

// Example 2
example = [[2, 2, 1, 1, 1, 2, 2]];
exampleDate(2, 1, example, majorityElement);

// Example 3
// example = [[0], 0, [1], 1];
// exampleDate(3, 1, example, majorityElement);

// You can enter your data for verification
const result4 = document.querySelector(`#ex45`);
const result5 = document.querySelector(`#ex55`);

result4.addEventListener(
  "click",
  () => (result4.value = userData(4, 1, majorityElement))
);
result5.addEventListener(
  "click",
  () => (result5.value = userData(5, 1, majorityElement))
);

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
