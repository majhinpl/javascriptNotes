const newObj = new Object();
// console.log(newObj);

const newObj2 = {};
// console.log(newObj2);

obj1 = { 1: "a", 2: "b" };

obj2 = { 3: "c", 4: "d" };

obj3 = Object.assign({}, obj1, obj2);
obj4 = { ...obj1, ...obj2 };

// console.log(obj4);

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));

// console.log(obj3);a
