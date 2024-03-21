// Вычисляем последовательно сумму цифр в массиве

let nums;

var runningSum = function (nums) {
  let sum = 0;
  return nums.map((num) => (sum += num));
};

nums = [1, 2, 3, 4];
console.log(runningSum(nums));

nums = [1, 1, 1, 1, 1];
console.log(runningSum(nums));

nums = [3, 1, 2, 10, 1];
console.log(runningSum(nums));
