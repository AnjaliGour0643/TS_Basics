// 1. number : Represents numeric values, including integers and floating-point numbers.
let age: number = 0x37CF;
let height: number = 5.9;

// 2. string : Represents textual data, a sequence of characters.
let firstName: string = "Anjali";
let greeting: string = `Hello, ${firstName}`;

// 3. boolean : Represents logical values: true or false.
let isStudent: boolean = true;
let hasGraduated: boolean = false;

// 4. array : Represents a collection of values of the same type. You can define arrays in two ways: using brackets ([]) or using the Array<type> syntax.
let scores: number[] = [85, 90, 78];
let names: Array<string> = ["Anjali", "Amit", "Ravi"];


// 5. tuple : Represents an array with a fixed number of elements where each element may have a different type.
let person: [string, number, boolean] = ["Anjali", 25, true];

// 6. enum : Enumerated types allow you to define a set of named constants. Enums make it easier to work with a set of related values.
enum Color {
    Red,
    Green,
    Blue,
}
let favoriteColor: Color = Color.Green;
console.log(favoriteColor); // Output: 1 (index of 'Green')
  
// 7. any : A dynamic type that can hold any value. It bypasses type-checking, but should be used sparingly as it weakens type safety.
let randomValue: any = 5;
randomValue = "Now it's a string";
randomValue = true;

// 8. void : Represents the absence of a type, commonly used as the return type of functions that do not return a value
function logMessage(message: string): void {
    console.log(message);
}
  
// 9. null and undefined : Represents absence of value. undefined means a variable has been declared but not assigned a value, while null is explicitly assigned to indicate "no value.
let nothing: null = null;
let something: undefined = undefined;

// 10. object : Represents non-primitive types, like objects, arrays, and functions.
let personInfo: { name: string; age: number } = {
    name: "Anjali",
    age: 25,
};
  
// 11. never : Represents values that never occur, often used for functions that always throw an error or never return.
function throwError(message: string): never {
    throw new Error(message);
}
  
// 12. unknown : Represents a variable that can be any type, but unlike any, you must perform some type-checking before performing operations on it.
let userInput: unknown;
userInput = "Anjali";
userInput = 10;

console.log(typeof(userInput))

if (typeof userInput === "string") {
  console.log(userInput.toUpperCase()); // Only allowed after type check
}

//  13. Union : Represents multiple possible types for a variable, making it more flexible but still type-safe.
let id: number | string;
id = 123;
id = "ABC123";

function getUserInfo(custID : (string | number)){
    if(typeof(custID) === 'string'){
        console.log('union with string')
    }
    else if(typeof(custID) === 'number'){
        console.log('union with number')
    }
}
getUserInfo(1)


// Example :
function printUserInfo(name: string, age: number, isStudent: boolean): void {
    console.log(`Name: ${name}, Age: ${age}, Student: ${isStudent}`);
}
printUserInfo("Anjali", 21, true);
  

/**
 * Summary of Important Data Types:
 * 
 * Primitive Types:              number, string, boolean, null, undefined.
 * Composite/Reference Types:    array, tuple, object.
 * Special Types:                any, void, never, unknown, union, enum.
 */