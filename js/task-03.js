/**
 * @param {number} n
 * @return {string[]}
 */

// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

var fizzBuzz = function (n) {
  const result = [];

  for (let i = 1; i <= n; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
      continue;
    } else if (i % 3 === 0) {
      result.push("Fizz");
      continue;
    } else if (i % 5 === 0) {
      result.push("Buzz");
      continue;
    } else {
      result.push(String(i));
    }
  }

  return result;
};

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
