// Нужно найти в каком из вложенных массивов наибольшая сумма числ и вернуть эту сумму

/**
 * @param {number[][]} accounts
 * @return {number}
 */

let accounts;

var maximumWealth = function (accounts) {
  const sumElem = accounts.map((elem) => {
    let sum = 0;
    const result = elem.map((num) => (sum += num));
    return result[result.length - 1];
  });
  sumElem.sort((a, b) => a - b);
  return sumElem[sumElem.length - 1];
};

accounts = [
  [1, 2, 3],
  [3, 2, 1],
];
console.log(maximumWealth(accounts));

accounts = [
  [1, 5],
  [7, 3],
  [3, 5],
];
console.log(maximumWealth(accounts));

accounts = [
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
];
console.log(maximumWealth(accounts));
