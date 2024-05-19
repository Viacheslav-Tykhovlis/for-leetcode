// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// solution
var merge = function (nums1, m, nums2, n) {
  let index = m;

  for (let i = 0; i < n; i += 1) {
    nums1.splice(index, 1, nums2[i]);
    index = index + 1;
  }

  nums1.sort((a, b) => a - b);
  return nums1;
};

// imports
import { quantity, exampleDate, userData } from "../index.js";

// name inputs
const quantityInput = 4;
quantity(quantityInput, ["nums1", "m", "nums2", "n"]);

// Examples
// Example 1
let example = [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3];
exampleDate(1, quantityInput, example, merge);

// Example 2
example = [[1], 1, [], 0];
exampleDate(2, quantityInput, example, merge);

// Example 3
example = [[0], 0, [1], 1];
exampleDate(3, quantityInput, example, merge);

// You can enter your data for verification
const result4 = document.querySelector(`#ex45`);
const result5 = document.querySelector(`#ex55`);

result4.addEventListener(
  "click",
  () => (result4.value = userData(4, quantityInput, merge))
);
result5.addEventListener(
  "click",
  () => (result5.value = userData(5, quantityInput, merge))
);
