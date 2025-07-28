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
}

// console.log(loggedInMsg("nephx"));
console.log(loggedInMsg());
