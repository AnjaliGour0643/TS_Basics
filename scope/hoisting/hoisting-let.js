// Hoisting let
// console.log(hoistedLet);       // Error: Cannot access 'hoistedLet' before initialization
var hoistedLet = "I am hoisted with let";
// After declaration
console.log(hoistedLet); // Output: "I am hoisted with let"
console.log('----------');
// Hoisting Function Expression let
// greet();   // Error: Cannot access 'greet' before initialization
var greet1 = function () {
    console.log("Hello from a function expression with let!");
};
greet1(); // Output: "Hello from a function expression with let!"
