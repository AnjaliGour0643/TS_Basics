// Eg 1 : Basic Object Definition - Defining an object using object literal notation

let person: { name: string; age: number; isStudent: boolean } = {
    name: "Anjali",
    age: 25,
    isStudent: true,
};

console.log(person.name); // Anjali
console.log(person.age);  // 25
console.log(person.isStudent); // true

console.log('-----------------')


//  Eg 2 : Object with optional properties

let employee: { name: string; age: number; department?: string } = {
    name: "Ravi",
    age: 30,
};

console.log(employee.name); // Ravi
console.log(employee.department); // undefined (since it is optional)

console.log('-----------------')


// Eg 3 : Defining method inside an object

let calculator = {
    add: (a: number, b: number): number => {
        return a + b;
    },
    subtract: (a: number, b: number): number => {
        return a - b;
    },
};

console.log(calculator.add(5, 3));      // 8
console.log(calculator.subtract(5, 3)); // 2

console.log('-----------------')


//  Eg 4 : defining an interface

// Defining an interface
interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

// Creating an object of type Book
let myBook: Book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
};

console.log(myBook.title); // The Great Gatsby

console.log('-----------------')


// Eg 5 : nested objects

let university = {
    name: "ABC University",
    address: {
        street: "123 Main St",
        city: "Metropolis",
        country: "Countryland",
    },
};

console.log(university.name); // Output: "ABC University"
console.log(university.address.city); // Output: "Metropolis"

console.log('-----------------')


// Eg 6 : Dynamic Object Properties - You can create objects with dynamic keys using computed property names.

// Using computed property names
let dynamicKey = "role";
let user = {
    name: "Martin",
    age: 30,
    [dynamicKey]: "Student", // Dynamic property
};

console.log(user.role); // Output: "Student"

// another example
const key1 = "name";
const key2 = "age";

const person1 = {
    [key1]: "Harry",  // Using key1 as the property name
    [key2]: 25        // Using key2 as the property name
};

console.log(person1); // Output: { name: 'Anjali', age: 25 }

// another example 
const prefix = "user_";
const userId = 101;

const user1 = {
    [`${prefix}name`]: "Anjali",
    [`${prefix}id`]: userId
};

console.log(user1); // Output: { user_name: 'Anjali', user_id: 101 }

console.log('-----------------')


// Eg 7 : Type assertion example - You can use type assertions to inform TypeScript about the type of an object.

let employeeInfo: any = {
    name: "John Doe",
    age: 30,
};

let employeeName = (employeeInfo as { name: string }).name;
// Type assertion is used here: (employeeInfo as { name: string }).
// This tells TypeScript: "I know that employeeInfo is an object and it has a name property of type string."
// After the type assertion, you access employeeInfo.name, and TypeScript now understands that name is a string.

console.log(employeeName); // John Doe
