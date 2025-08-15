const user = {
  username: "nephx",
  loginCount: 8,
  signin: true,

  getUserDetails: function () {
    // console.log("Here is details");
    // console.log(this.username);
    console.log(this);
  },
};

// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.user}`);
  };

  return this;
}

const userOne = new User("nephx", 12, true);
const userTwo = new User("majhix", 16, false);

// console.log(userOne);

/*

// new keyword creates empty objects for that we called instances

// constructor call because of new keyword

// all arguments wiil injects in the this keywords

// will received function

*/

console.log(userOne.construcotr);
