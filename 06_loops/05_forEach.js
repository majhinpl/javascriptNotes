let stocks = ["lec", "kkhc", "nhdl", "hdiclp"];

stocks.forEach((stock) => {
  //   console.log(stock);
});

function printMe(item) {
  //   console.log(item);
}

// stocks.forEach(printMe);

stocks.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

const myCoading = [
  {
    langName: "Javascript",
    fileName: "js",
  },
  {
    langName: "java",
    fileName: "java",
  },
  {
    langName: "python",
    fileName: "py",
  },
];

myCoading.forEach((lang) => {
  console.log(lang.langName);
});
