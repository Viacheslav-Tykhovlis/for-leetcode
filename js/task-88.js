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

// table
// name inputs
function quantity(num, nameInput) {
  for (let i = 1, j = 0; i <= num; i++, j++) {
    const input = document.querySelector(`.input${i}`);
    input.textContent = `${nameInput[j]}`;
  }
}
quantity(4, ["nums1", "m", "nums2", "n"]);

// displayed table fields for example
function exampleCount(numExample, numField, input) {
  for (let i = 1, j = 0; i <= numField; i++, j++) {
    const field = document.querySelector(`.ex${numExample}${i}`);
    field.textContent = `${input[j]}`;
  }

  const resultField = document.querySelector(`.ex${numExample}5`);
  const result = merge(...input);
  resultField.textContent = result;
}

// Examples
// Example 1
let example = [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3];
// exampleCount(1, 4, example);

// Example 2
example = [[1], 1, [], 0];
// exampleCount(2, 4, example);

// Example 3
example = [[0], 0, [1], 1];
// exampleCount(3, 4, example);

// You can enter your data for verification

const result4 = document.querySelector(`#ex45`);
const result5 = document.querySelector(`#ex55`);

result4.addEventListener("click", () => (result4.value = userData(4, 4)));
result5.addEventListener("click", () => (result5.value = userData(5, 4)));

function userData(numExample, numField) {
  const input = [];
  for (let i = 1, j = 0; i <= numField; i++, j++) {
    const field = document.querySelector(`#ex${numExample}${i}`);

    switch (field.name) {
      case "array":
        const arr = field.value.split(",");
        const data = arr.map((elem) => +elem);
        input.push(data);
        break;

      case "nummer":
        input.push(+field.value);
        break;
    }
  }
  const result = merge(...input);
  return result;
}
