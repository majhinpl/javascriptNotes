const user = {
  username: "nephx",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website.`);
    // console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "neps";
// user.welcomeMessage();

// console.log(this);

function thisK() {
  console.log(this);
}
// thisK();

const arrowFn = () => {
  let username = "nephx";
  console.log(this);
};

arrowFn();

const addTwo = (num1, num2) => {
  return num1 + num2;
};

const addTwo1 = (num1, num2) => num1 + num2;

const addTwo2 = (num1, num2) => ({ usernmae: "nephx" }); // object returns

const newArray = [1, 2, 4, 5, 6];
newArray.forEach();
