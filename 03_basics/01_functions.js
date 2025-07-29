// Functions

function addTwoNums(a, b) {
  console.log(a + b);
  a + b;
}

// addTwoNums(3, 5);
const addnums = addTwoNums(3, 5);
// console.log(addnums);

function addTwoNums(a, b) {
  //   result = a + b;
  //   return result;

  return a + b;
}

const addNums = addTwoNums(5, 5);

// console.log("results :", addNums);

function loggedInMsg(username = "someone") {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged-In`;
  u;
}

// console.log(loggedInMsg("nephx"));
// console.log(loggedInMsg());

// spread operator

function calcCardPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calcCardPrice(200, 100, 600));

const user = {
  username: "nephx",
  price: 199,
};

function handlePrice(anyObj) {
  console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
}

handlePrice(user);

const myNewArray = [122, 200, 400, 600];

function secondVal(getArr) {
  return getArr[0];
}

console.log(secondVal(myNewArray));
