// Generics in TypeScript allow you to create reusable components that work with a variety of types while maintaining type safety

// Example 1

function identity<T>(value: T): T {
    return value;
}
let numberIdentity = identity<number>(5);  
let stringIdentity = identity<string>("Hello");
let booleanIdentity = identity<boolean>(true); 

console.log(numberIdentity, typeof(numberIdentity));  // 5 number
console.log(stringIdentity, typeof(stringIdentity));  // Hello string
console.log(booleanIdentity, typeof(booleanIdentity));  // true boolean

console.log('----------')


// Example 2 : Generic function with array

function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}
let numbers = [10, 20, 30];
let strings = ["Anjali", "Ravi", "Amit"];

console.log(getFirstElement<number>(numbers));  // 10
console.log(getFirstElement<string>(strings));  // Anjali

console.log('----------')


// Example 3 : Generic multiple types

function makePair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}
let numberStringPair = makePair<number, string>(5, "Anjali");  
let booleanArrayPair = makePair<boolean, number[]>(true, [1, 2, 3]); 

console.log(numberStringPair);  // [5, "Anjali"]
console.log(booleanArrayPair);  // [true, [1, 2, 3]]

