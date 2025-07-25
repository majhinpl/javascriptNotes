const name = "nephx";
const username = "nephx";
const repoCount = 50;

console.log(name + repoCount + username + " Value");

/*
console.log(username[0]);
console.log(username.__proto__);
console.log(name.toUpperCase());
console.log(username.charAt(2));
console.log(username.indexOf("n"));
console.log(username.substring(0, 4));
console.log(username.slice(-4, 8));

 */

const stocks = "   4547 nhpc  ";
console.log(stocks);
console.log(stocks.trim());
console.log(stocks.replace("   4547 ", ""));
console.log(stocks.includes("nhpc"));

const newStocks = "nhph price 600";
console.log(newStocks.split(" "));

const newStrings = new String("i am learning Strings.");
console.log(newStrings.bold());
console.log(newStrings.toWellFormed(""));
