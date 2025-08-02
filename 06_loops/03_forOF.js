// for of

const stocks = ["lec", "kkhc", "nhdl", "hdiclp"];

for (const element of stocks) {
  //   console.log(element);
}

// Maps

const map = new Map();

map.set("sympol", "unhpl");

// console.log(map);

for (const [key, value] of map) {
  console.log(key, ":", value);
}
