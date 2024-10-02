// Basic function
function add(a, b) {
    return a + b;
}
console.log(add(4, 6));
console.log('----------------');
// Optional Parameters : You can make parameters optional by using a question mark (?)
function greet(name, greeting) {
    return greeting ? "".concat(greeting, ", ").concat(name, " ") : "Hello, ".concat(name);
}
console.log(greet('Anjali'));
console.log(greet('Joshua', 'Hii'));
console.log('----------------');
// Default Parameters : You can assign default values to parameters(if no value is provided)
function greetUser(name, greeting) {
    if (greeting === void 0) { greeting = 'Hello'; }
    return "".concat(greeting, ", ").concat(name);
}
console.log(greetUser('Anjali'));
console.log(greetUser('Siddharth', 'Hii'));
console.log('----------------');
// Function returning void : If a function doesn’t return any value, the return type is void.
function printMessage(message) {
    console.log('Studying about functions in TypeScript');
}
printMessage("What's the update?");
console.log('----------------');
// Function type Expression : In TypeScript, you can define a variable with a function type and then assign a function to that variable.
// let multiply: (x: number, y: number) => number;
var multiply = function (a, b) {
    return a * b;
};
console.log(multiply(5, 3));
console.log('----------------');
// Arrow Function 
var divide = function (a, b) { return a / b; };
console.log(divide(34, 2));
console.log('----------------');
// Rest Parameters 
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (prev, curr) { return prev + curr; }, 0);
}
console.log(sum(1, 2, 3, 4)); //10
