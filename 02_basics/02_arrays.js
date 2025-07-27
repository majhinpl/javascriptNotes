const buyStocks = ["tpc", "nhpc", "shpc"];
const soldStocks = ["nhdl", "sanima", "bhl"];

// buyStocks.push(soldStocks);
// console.log("push", buyStocks);

// totalSold = soldStocks.concat(buyStocks);
// console.log("concate", totalSold);

const totalSoldNew = [...buyStocks, ...soldStocks];

// console.log(totalSoldNew);

const stocksPrie = [
  123,
  245,
  [452, 458, 456],
  562,
  42,
  123,
  [546, 1254, 625],
  568,
];

const newStocksPrice = stocksPrie.flat(Infinity);
// console.log(newStocksPrice);

console.log(Array.isArray("nephx"));
console.log(Array.from("nephx"));

console.log(Array.from({ name: "nephx" })); // object cannot process directely to array. need to tell the keys or values to be make in arrays.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
