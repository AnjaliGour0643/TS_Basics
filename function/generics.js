// Generics in TypeScript allow you to create reusable components that work with a variety of types while maintaining type safety
// Example 1
function identity(value) {
    return value;
}
var numberIdentity = identity(5);
var stringIdentity = identity("Hello");
var booleanIdentity = identity(true);
console.log(numberIdentity, typeof (numberIdentity)); // 5 number
console.log(stringIdentity, typeof (stringIdentity)); // Hello string
console.log(booleanIdentity, typeof (booleanIdentity)); // true boolean
console.log('----------');
// Example 2 : Generic function with array
function getFirstElement(arr) {
    return arr[0];
}
var numbers = [10, 20, 30];
var strings = ["Anjali", "Ravi", "Amit"];
console.log(getFirstElement(numbers)); // 10
console.log(getFirstElement(strings)); // Anjali
console.log('----------');
// Example 3 : Generic multiple types
function makePair(first, second) {
    return [first, second];
}
var numberStringPair = makePair(5, "Anjali"); // [5, "Anjali"]
var booleanArrayPair = makePair(true, [1, 2, 3]); // [true, [1, 2, 3]]
console.log(numberStringPair); // [5, "Anjali"]
console.log(booleanArrayPair); // [true, [1, 2, 3]]
