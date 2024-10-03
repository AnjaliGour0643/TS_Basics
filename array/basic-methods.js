// In TypeScript, an array is a data structure that holds a collection of elements, where each element is of the same type.
// Arrays allow you to store multiple values in a single variable and perform operations like adding, removing, and manipulating elements.
// Array Declaration 
var digits = [2, 3, 4, 5];
var names = ['Alex', 'Betty', 'Charlie'];
// let numbers: Array<number> = [1, 2, 3, 4, 5];
// let names: Array<string> = ["Anjali", "Ravi", "Amit"];
var numbers = [1, 2, 3, 4, 5];
console.log("Original Array:", numbers);
// 1. push() - Adds elements to the end of the array
numbers.push(6);
console.log("After push(6):", numbers);
// 2. pop() - Removes the last element from the array
var poppedValue = numbers.pop();
console.log("After pop():", numbers);
console.log("Popped Value:", poppedValue);
// 3. unshift() - Adds elements to the beginning of the array
numbers.unshift(0);
console.log("After unshift(0):", numbers);
// 4. shift() - Removes the first element from the array
var shiftedValue = numbers.shift();
console.log("After shift():", numbers);
console.log("Shifted Value:", shiftedValue);
// 5. concat() - Merges two or more arrays
var moreNumbers = [6, 7, 8];
var combined = numbers.concat(moreNumbers);
console.log("After concat([6, 7, 8]):", combined);
// 6. slice() - Returns a shallow copy of a portion of the array
var slicedArray = combined.slice(2, 5);
console.log("After slice(2, 5):", slicedArray);
// 7. splice() - Removes/updates elements in the array
var splicedArray = combined.splice(2, 2); // Removes 2 elements starting from index 2
console.log("After splice(2, 2):", combined);
console.log("Spliced Elements:", splicedArray);
// 8. indexOf() - Returns the index of the first occurrence of an element
var index = combined.indexOf(4);
console.log("Index of 4:", index);
// 9. forEach() - Executes a function once for each array element
console.log("Using forEach() to double each element:");
combined.forEach(function (num) { return console.log(num * 2); });
// 10. map() - Creates a new array by applying a function to each element
var doubledArray = combined.map(function (num) { return num * 2; });
console.log("After map(num => num * 2):", doubledArray);
// 11. filter() - Creates a new array with elements that pass the condition
var evenNumbers = combined.filter(function (num) { return num % 2 === 0; });
console.log("After filter(num => num % 2 === 0):", evenNumbers);
// 12. reduce() - Reduces the array to a single value
var sum = combined.reduce(function (acc, curr) { return acc + curr; }, 0);
console.log("After reduce((acc, curr) => acc + curr, 0):", sum);
