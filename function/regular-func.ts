// Basic function

function add(a: number, b : number) : number{
    return a+b
}
console.log(add(4, 6))

console.log('----------------')

// Optional Parameters : You can make parameters optional by using a question mark (?)

function greet(name : string, greeting? : string) : string{
    return greeting ? `${greeting}, ${name} ` : `Hello, ${name}`
}
console.log(greet('Anjali'))
console.log(greet('Joshua', 'Hii'))

console.log('----------------')

// Default Parameters : You can assign default values to parameters(if no value is provided)

function greetUser(name : string, greeting : string = 'Hello') : string{
    return `${greeting}, ${name}`
}
console.log(greetUser('Anjali'))
console.log(greetUser('Siddharth', 'Hii'))

console.log('----------------')

// Function returning void : If a function doesn’t return any value, the return type is void.

function printMessage(message: string) : void{
    console.log('Studying about functions in TypeScript')
}
printMessage("What's the update?")

console.log('----------------')

// Function type Expression : In TypeScript, you can define a variable with a function type and then assign a function to that variable.

// let multiply: (x: number, y: number) => number;
let multiply = function (a: number, b: number): number {
    return a * b;
};
console.log(multiply(5, 3)); 

console.log('----------------')

// Rest Parameters 
function sum(...numbers: number[]): number {
    return numbers.reduce((prev, curr) => prev + curr, 0);
}
console.log(sum(1, 2, 3, 4)); //10
