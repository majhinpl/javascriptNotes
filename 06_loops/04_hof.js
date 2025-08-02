const myStocks = {
  stock: "unhpl",
  price: 456,
};

for (const key of myStocks) {
  console.log(`${key} shortcut is for ${myStocks[key]}`);
}

const stocks = ["lec", "kkhc", "nhdl", "hdiclp"];

// for (const key in stock) {
//   if (Object.prototype.hasOwnProperty.call(object, key)) {
//     const element = object[key];
//   }
// }
