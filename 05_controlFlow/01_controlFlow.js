// If else

// comparation operators
// <, >, <=, >=, ==, !=, ===, !==

// shorthand
const balance = 1000;
if (balance > 500) console.log("test");

// nesting

if (balance < 500) {
  console.log("less than 500");
} else if (balance < 700) {
  console.log("less than 500");
} else if (balance < 900) {
  console.log("less than 900");
}

const isUserLoggedIn = true;
const debitCard = true;

if (isUserLoggedIn && debitCard) {
  console.log("Allow to purchase stocks");
} else {
  console.log("unable to purchase stocks");
}
