// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

/**
 * @param {number[]} prices
 * @return {number}
 */

// solution
var maxProfit = function (prices) {
  let buy = prices[0];
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] - buy > maxProfit) {
      maxProfit = prices[i] - buy;
    }
    if (prices[i] < buy) {
      buy = prices[i];
    }
  }
  return maxProfit;
};

// imports
import { quantity, exampleDate, userData } from "../index.js";

// name inputs
quantity(1, ["prices"]);

// Examples
// Example 1
let example = [[7, 1, 5, 3, 6, 4]];
exampleDate(1, 1, example, maxProfit);

// Example 2
example = [[7, 6, 4, 3, 1]];
exampleDate(2, 1, example, maxProfit);

// Example 3
example = [[2, 4, 1]];
exampleDate(3, 1, example, maxProfit);

// You can enter your data for verification
const result4 = document.querySelector(`#ex45`);
const result5 = document.querySelector(`#ex55`);

result4.addEventListener(
  "click",
  () => (result4.value = userData(4, 1, maxProfit))
);
result5.addEventListener(
  "click",
  () => (result5.value = userData(5, 1, maxProfit))
);

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([2, 4, 1]));
