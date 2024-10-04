// In TypeScript, a type alias is a way to give a name to a specific type or combination of types. 
// It allows you to create a custom name for a type, making it easier to reuse and refer to the same type in different parts of your code. 
// Type aliases provide better readability, organization, and abstraction of complex types
// In TypeScript, type aliases are used to create new names for types. 
// They allow you to define a custom type that can represent primitive types, union types, object types, or even function signatures.

// To define a type alias, you use the type keyword followed by the alias name and the type definition


// Example 1 : A type alias can be used to create a simpler name for a primitive type like string, number, etc.

type Username = string;
type Age = number;

let user: Username = "JohnDoe";
let age: Age = 25;

console.log(user); // Output: JohnDoe
console.log(age);  // Output: 25

console.log('---------------')


// Example 2:  You can use type aliases to define the shape of an object, similar to an interface.

type Person = {
    name: string;
    age: number;
    isEmployed: boolean;
    occupation? : string
    address : {city:string; country:string}
};
  
let Alex: Person = {
    name: "Allen Walker",
    age: 30,
    isEmployed: true,
    address : {
        city : 'Pune',
        country : 'India'
    }
};
  
console.log(Alex); // Output: { name: 'Allen Walker', age: 30, isEmployed: true }
  
console.log('---------------')


// Example 3

type Product = {
    name : string;
    price : number;
    quantity : number
}

const item1 : Product = {
    name : 'pen',
    price : 10,
    quantity : 5
}

const calculateTotalPrice = (product : Product) => {
    return `${product.name} total cost ${product.price * product.quantity}`
}
console.log(calculateTotalPrice(item1))

console.log('---------------')


//  Example 6 : Type alias for nested types

type Address = {
    street: string;
    city: string;
    zipCode: number;
  };
  
  type PersonWithAddress = {
    name: string;
    age: number;
    address: Address;  // Nested Address type
  };
  
  let person: PersonWithAddress = {
    name: "John Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      zipCode: 10001,
    },
  };
  
  console.log(person);
  // Output: { name: 'John Doe', age: 30, address: { street: '123 Main St', city: 'New York', zipCode: 10001 } }
  

console.log('---------------')


// Example 5 : Type Alias with Union and Intersection

type Admin = {
    name: string;
    privileges: string[];
};
  
type Employee = {
    name: string;
    startDate: Date;
};
  
type ElevatedEmployee = Admin & Employee;  // Intersection of Admin and Employee
  
let emp: ElevatedEmployee = {
    name: "Alice",
    privileges: ["create-server"],
    startDate: new Date(),
};
  
console.log(emp);
// Output: { name: 'Alice', privileges: ['create-server'], startDate: 2024-08-10T00:00:00.000Z }
  

console.log('---------------')

// Example 6 : Type alias for a union type

type StringOrNumber = string | number;

let value: StringOrNumber = "Hello";
console.log(value); // Output: Hello

value = 42;
console.log(value); // Output: 42


console.log('---------------')

//  Example 7 : Type alias for an array

type StringArray = string[];
type NumberArray = number[];

let fruits: StringArray = ["Apple", "Banana", "Orange"];
let numbers: NumberArray = [1, 2, 3, 4, 5];

console.log(fruits);  // Output: ['Apple', 'Banana', 'Orange']
console.log(numbers); // Output: [1, 2, 3, 4, 5]

console.log('---------------')


// Example 8 : Type alias for a function signature

type GreetFunction = (name: string) => string;

const greet: GreetFunction = (name: string) => {
  return `Hello, ${name}!`;
};

console.log(greet("Alice")); // Output: Hello, Alice!
