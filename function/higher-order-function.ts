// Example 1 : Function 'a' that takes another function 'b' as an argument

function a(b: () => void): void {
    console.log(b);   // Logs the function definition
    b();              // Calls the passed-in function
}

function whatsUp(): void {
    console.log('Learning about higher-order function in TypeScript');
}

a(whatsUp); 

 console.log('----------------')

//  Example 2 : Function with parameters, passed as an argument 

function executeOperation(operation: (num: number) => number, num: number): number {
    return operation(num);
}

function square(n: number): number {
    return n * n;
}

function double(n: number): number {
    return n * 2;
}

console.log(executeOperation(square, 5));  // 25
console.log(executeOperation(double, 3));  // 6

console.log('----------------')


// Example 3 : Higher-order function that returns another function

function createMultiplier(multiplier: number): (num: number) => number {
    return function (num: number): number {
        return num * multiplier;
    };
}

const doubleFunction = createMultiplier(2);  
const tripleFunction = createMultiplier(3);  

console.log(doubleFunction(4));  // 8
console.log(tripleFunction(5));  // 15

console.log('----------------')


// Example 4: Combining Both (Passing and Returning Functions)

function modifyFunction(fn: (n: number) => number): (n: number) => number {
    return function (n: number): number {
        return fn(n) + 10;
    };
}

// Original function that multiplies by 3
function timesThree(n: number): number {
    return n * 3;
}

// Modify the timesThree function
const modifiedTimesThree = modifyFunction(timesThree);

console.log(modifiedTimesThree(2));  // 16 (2 * 3 + 10)
console.log(modifiedTimesThree(4));  // 22 (4 * 3 + 10)
