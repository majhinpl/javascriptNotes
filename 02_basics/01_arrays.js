// arrays
const prices = [123, 452, 142.3, 546.56, 256.4, 2245.65];
const stocks = ["nhpc", "shpc", "bhl", "sanima"];

// console.log(prices.length);
// console.log(stocks[1]);

// Array methods

prices.push(123.45);
// console.log(prices);

prices.pop();
// console.log(prices);

prices.unshift(444);
// console.log(prices);

prices.shift();
// console.log(prices);

// console.log(prices.includes(123.45));
// console.log(prices.indexOf(3));

// slice, splice
// Remove multiple items from the end of an array

const myStocks = ["unhpl", "tpc", "bhl", "hidclp", "nhdl", "kkhc"];

// removing from the last elements
// const sellStocks = myStocks.splice(-3);
// console.log("splice in original arrays : \n", myStocks);

// console.log("sold stocks : \n", sellStocks);

/*
console.log("original arrays : \n", stocks);

console.log("slice : \n", stocks.slice(1, 3));
console.log("original arrays : \n", stocks);

*/
