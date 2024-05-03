// Given an array nums of size n, return the majority element.
//       The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */

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

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
