// Example 1 : Function 'a' that takes another function 'b' as an argument
function a(b) {
    console.log(b); // Logs the function definition
    b(); // Calls the passed-in function
}
function whatsUp() {
    console.log('Learning about higher-order function in TypeScript');
}
a(whatsUp);
console.log('----------------');
//  Example 2 : Function with parameters, passed as an argument 
function executeOperation(operation, num) {
    return operation(num);
}
function square(n) {
    return n * n;
}
function double(n) {
    return n * 2;
}
console.log(executeOperation(square, 5)); // 25
console.log(executeOperation(double, 3)); // 6
console.log('----------------');
// Example 3 : Higher-order function that returns another function
function createMultiplier(multiplier) {
    return function (num) {
        return num * multiplier;
    };
}
var doubleFunction = createMultiplier(2);
var tripleFunction = createMultiplier(3);
console.log(doubleFunction(4)); // 8
console.log(tripleFunction(5)); // 15
console.log('----------------');
// Example 4: Combining Both (Passing and Returning Functions)
function modifyFunction(fn) {
    return function (n) {
        return fn(n) + 10;
    };
}
// Original function that multiplies by 3
function timesThree(n) {
    return n * 3;
}
// Modify the timesThree function
var modifiedTimesThree = modifyFunction(timesThree);
console.log(modifiedTimesThree(2)); // 16 (2 * 3 + 10)
console.log(modifiedTimesThree(4)); // 22 (4 * 3 + 10)
