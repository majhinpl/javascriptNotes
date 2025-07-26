const date = new Date();

/*
console.log(date.toString());
console.log(date.toISOString());
console.log(date.toJSON());
console.log(date.toLocaleDateString());
console.log(date.toDateString());

 */

let createDate = new Date();
// console.log(createDate.toDateString());

const createNewDate = new Date(2025, 5, 26, 5, 3);
// console.log("localdate : \n", createNewDate.toLocaleString());

const createNewDateFormat = new Date("01-26-2025");
// console.log("createNewDateFormat : \n", createNewDateFormat.toLocaleString());

const timestamps = Date.now();
console.log(timestamps);
// console.log(createNewDateFormat.getTime());
// console.log(Math.floor(Date.now() / 1000));

console.log(createDate.getMonth()); // starts with "0"
console.log(createDate.getDay());

createDate.toLocaleString("default", {
  timeZoneName: "longGeneric",
  weekday: "long",
});

console.log(createDate);
