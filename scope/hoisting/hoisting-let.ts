// Hoisting let

// console.log(hoistedLet);       // Error: Cannot access 'hoistedLet' before initialization
let hoistedLet: string = "I am hoisted with let";

// After declaration
console.log(hoistedLet); // Output: "I am hoisted with let"


console.log('----------')

// Hoisting Function Expression let

// greet();   // Error: Cannot access 'greet' before initialization
let greet1 = function(): void {
    console.log("Hello from a function expression with let!");
};

greet1(); // Output: "Hello from a function expression with let!"
