/*
const realizeGain = 123456;

console.log(realizeGain);

const unrealizedGain = new Number(25462);
console.log(unrealizedGain);

console.log(unrealizedGain.toString().length);
console.log(unrealizedGain.toFixed(3));

const netWorth = 1005139.75;
console.log(netWorth.toPrecision(8));

console.log(netWorth.toLocaleString());
console.log(netWorth.toLocaleString("en-IN"));
 */

// Maths

/*

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.abs(4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.5));
console.log(Math.floor(4.5));
console.log(Math.min(4, 2, 3, 4, 5));
console.log(Math.max(4, 2, 3, 4, 5));

 */

console.log(Math.random() * 10 + 1);
console.log((Math.random() * 10 + 1).toFixed(0));
console.log("ceil + random", Math.ceil(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
