const userEmail = "yourmail@mail.com";

if (userEmail) {
  console.log("Got the email");
} else {
  console.log("don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values
// "0", "false", " ", [], {}, function(){}

// if (userEmail.length === 0) {
//   console.log("Array is empty");
// } else {
//   console.log(userEmail);
// }

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("object is empty");
}

// Nullish coalescing operator (??) : null undefined

let val1;

// val1 = 5 ?? 10;

// val1 = null ?? 10

// val = undefined ?? 15;

// val1 = null ?? 10 ?? 20;

// console.log(val1);

// Terniary operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");
