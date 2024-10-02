// 1. number : Represents numeric values, including integers and floating-point numbers.
var age = 25;
var height = 5.9;
// 2. string : Represents textual data, a sequence of characters.
var firstName = "Anjali";
var greeting = "Hello, ".concat(firstName);
// 3. boolean : Represents logical values: true or false.
var isStudent = true;
var hasGraduated = false;
// 4. array : Represents a collection of values of the same type. You can define arrays in two ways: using brackets ([]) or using the Array<type> syntax.
var scores = [85, 90, 78];
var names = ["Anjali", "Amit", "Ravi"];
// 5. tuple : Represents an array with a fixed number of elements where each element may have a different type.
var person = ["Anjali", 25, true];
// 6. enum : Enumerated types allow you to define a set of named constants. Enums make it easier to work with a set of related values.
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var favoriteColor = Color.Green;
console.log(favoriteColor); // Output: 1 (index of 'Green')
// 7. any : A dynamic type that can hold any value. It bypasses type-checking, but should be used sparingly as it weakens type safety.
var randomValue = 5;
randomValue = "Now it's a string";
randomValue = true;
// 8. Represents the absence of a type, commonly used as the return type of functions that do not return a value
function logMessage(message) {
    console.log(message);
}
// 9. null and undefined : Represents absence of value. undefined means a variable has been declared but not assigned a value, while null is explicitly assigned to indicate "no value.
var nothing = null;
var something = undefined;
// 10. object : Represents non-primitive types, like objects, arrays, and functions.
var personInfo = {
    name: "Anjali",
    age: 25,
};
// 11. never : Represents values that never occur, often used for functions that always throw an error or never return.
function throwError(message) {
    throw new Error(message);
}
// 12. unknown : Represents a variable that can be any type, but unlike any, you must perform some type-checking before performing operations on it.
var userInput;
userInput = "Anjali";
userInput = 10;
if (typeof userInput === "string") {
    console.log(userInput.toUpperCase()); // Only allowed after type check
}
//  13. Represents multiple possible types for a variable, making it more flexible but still type-safe.
var id;
id = 123;
id = "ABC123";
// Example :
function printUserInfo(name, age, isStudent) {
    console.log("Name: ".concat(name, ", Age: ").concat(age, ", Student: ").concat(isStudent));
}
printUserInfo("Anjali", 25, true);
