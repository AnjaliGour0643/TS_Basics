// Hoisting const
// // console.log(hoistedConst);       // Error: Cannot access 'hoistedConst' before initialization
// const hoistedConst: string = "I am hoisted with const";
// // After declaration
// console.log(hoistedConst); // Output: "I am hoisted with const"
console.log('----------');
// Hoisting Function Expression const
// greet(); // Error: Cannot access 'greet' before initialization
var greet2 = function () {
    console.log("Hello from a function expression with const!");
};
greet2(); // Output: "Hello from a function expression with const!"
