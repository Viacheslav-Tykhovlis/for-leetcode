// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// solution
var removeElement = function (nums, val) {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
};

// imports
import { quantity, exampleDate, userData } from "../index.js";

// name inputs
quantity(2, ["nums1", "val"]);

// Examples
// Example 1
let example = [[3, 2, 2, 3], 3];
exampleDate(1, 2, example, removeElement);

// Example 2
example = [[0, 1, 2, 2, 3, 0, 4, 2], 2];
exampleDate(2, 2, example, removeElement);

// Example 3
// example = [[0], 0, [1], 1];
// exampleDate(3, 4, example, merge);

// You can enter your data for verification
const result4 = document.querySelector(`#ex45`);
const result5 = document.querySelector(`#ex55`);

result4.addEventListener(
  "click",
  () => (result4.value = userData(4, 2, removeElement))
);
result5.addEventListener(
  "click",
  () => (result5.value = userData(5, 2, removeElement))
);

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
