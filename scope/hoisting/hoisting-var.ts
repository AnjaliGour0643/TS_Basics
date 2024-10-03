// Hoisting var

// console.log(hoistedVar); // Output: undefined (due to hoisting)

// var hoistedVar: string = "I am hoisted";

// // After declaration
// console.log(hoistedVar); // I am hoisted

console.log('---------')


// Hoisting Function Expression var

// greet(); // Error: Cannot access 'greet' before initialization
var greetOne = function() {    // var greetOne = function(): void{} -> giving error (unexpected token ':')
    console.log("Hello from a function expression!");
};
greetOne(); // Output: "Hello from a function expression!"


