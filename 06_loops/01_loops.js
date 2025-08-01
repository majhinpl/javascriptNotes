// For loop

for (let i = 0; i <= 10; i++) {
  const element = i;
  //   console.log(element);
}

for (let i = 0; i <= 10; i++) {
  //   console.log(` "outer loop value : ${i}`);

  for (let j = 0; j <= 10; j++) {
    // console.log(`inner loop value : ${j}`);
  }
}

let stocks = ["lec", "kkhc", "nhdl", "hdiclp"];

for (let s = 0; s < stocks.length; s++) {
  const element = stocks[s];
  //   console.log(element.toUpperCase());
}

// break and continue
for (let i = 0; i < 20; i++) {
  if (i === 5) {
    console.log("detected 5");
    break;
  }
  console.log(`Value of i is ${i}`);
}

for (let i = 0; i < 20; i++) {
  if (i === 5) {
    console.log("detected 5");
    continue;
  }
  console.log(`Value of i is ${i}`);
}
