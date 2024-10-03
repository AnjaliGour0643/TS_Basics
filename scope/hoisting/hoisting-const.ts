// Hoisting const

// // console.log(hoistedConst);       // Error: Cannot access 'hoistedConst' before initialization
// const hoistedConst: string = "I am hoisted with const";

// // After declaration
// console.log(hoistedConst); // Output: "I am hoisted with const"


console.log('----------')


// Hoisting Function Expression const

// greet(); // Error: Cannot access 'greet' before initialization

const gre = function() {  //const greet2 = function() : void {} -> it is giving error
    console.log("Hello from a function expression with const!");
};

gre(); // Output: "Hello from a function expression with const!"
