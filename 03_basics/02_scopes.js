// Scopes
/*
var c = 300;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a);
// console.log(b);
console.log(c);

*/

if (true) {
  let a = 10;
  const b = 20;
}

// console.log(a);
// console.log(b);

// nested function

function one() {
  const username = "nephx";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website);

  two();
}

one();

// Scope level and mini hoisting in javascript

console.log(addOne(5));
function addOne(num) {
  return num + 1;
}

const addTwo = function (num) {
  return num + 2;
};
addTwo(5);
