// primitives

// 7 types : String, Number, boolean, null, undefined, symbol, bigint

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 31245677678524n;
console.log(typeof bigNumber);

// non-primitives (reference)

// Array, Objects, functions

const stocks = ["unhpl", "bhl", "nhpc", "shpc"];

const stock = {
  name: "unhpl",
  stockId: "np124563",
  floatShare: 12456357,
  basePrice: 1234,
};

// console.log(stock);

function showName(stocks) {
  return stocks;
}
console.log(typeof outsideTemp);
console.log(typeof showName);
console.log(typeof Symbol);
