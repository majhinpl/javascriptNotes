// Immediately Invoked Function Expressions (IIFE)

(function iife() {
  console.log("Database connected.");
})();

((name) => {
  console.log(`Database connected two. ${name}`);
})("nephx");
