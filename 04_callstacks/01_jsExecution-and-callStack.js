// JS execution context
let val1 = 10;
let val2 = 5;
function addNum(val1, val2) {
  let total = num1 + num2;
  return total;
}
let result1 = addNum(val1, Val2);
let result2 = addNum(10, 2);

/*

1. Global execution context - this
2. Function execution context - memory phase
3. Eval Execution context

// Phase
1. Memory creation phase - variables memory
2. Execution Phase - operations 

// 1. Global execution context

    |
   this

// 2. Execution context - memory phase

// how it works
val1 - undefined
val2 - undefined
addNum - defination
result1 - undefined
result2 - undefined

// 3. Execution Phase - operations 

val1 - 10
val - 5
addNum -> creates new execution context
result = 15 // it is comming after creates new execution context

for the function it will go to memory phase and execution phase. and delete once the works is done

- env variable
- execution thread

// memory phase
val1 - undefined
val2 - undefined
total - undefined

// execution context
num1 - 10
num2 5
total - 15 - return refer to globle context


*/

// call stacks
