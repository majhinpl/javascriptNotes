// singleton
// Object.create

// object literals

const symbol = Symbol("key1");

const user = {
  name: "nephx",
  "full name": "nephx nephx",
  [symbol]: "Key1",
  id: "njshdddjdd",
  location: "janakpur",
  isLoggedIn: false,
  email: "mail@mail.com",
  lastLoggedIn: ["mon", "tue", "web"],
};

console.log(user.email);
console.log(user["email"]);
console.log(user["full name"]);
console.log(user[symbol]);
