// let myName = "nephx";

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power ${this.spiderman}`);
  },
};

Object.prototype.nephx = function () {
  console.log(`nephx is present in all objects`);
};

// heroPower.nephx();

myHeros.nephx();

// inheritance

const User = {
  username: "nephx",
  email: "someone@mail.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,

  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "nephx    ";
String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is : ${this.trim().length}`);
};

anotherUsername.trueLength();
