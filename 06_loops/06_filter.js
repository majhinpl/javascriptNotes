const stocks = ["lec", "kkhc", "nhdl", "hdiclp"];

const val = stocks.forEach((stock) => {
  //   console.log(stock);
});

// console.log(val);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newNums = myNums.filter((num) => num > 4);

const newNums1 = myNums.filter((num) => {
  return num > 4;
});

console.log(newNums);
console.log(newNums1);

const newNums2 = [1, 2, 3, 45, 6];

const newNums3 = newNums2.map((num) => num + 10);
console.log(newNums3);

// reduce
const initialValue = 0;

const myTotal = newNums2.reduce((acc, curVal) => {
  console.log(`acc : ${acc} and curVal : ${curVal}`);

  return acc + curVal;
}, 0);

// console.log(myTotal);
