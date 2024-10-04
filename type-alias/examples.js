// In TypeScript, a type alias is a way to give a name to a specific type or combination of types. 
// It allows you to create a custom name for a type, making it easier to reuse and refer to the same type in different parts of your code. 
// Type aliases provide better readability, organization, and abstraction of complex types
// In TypeScript, type aliases are used to create new names for types. 
// They allow you to define a custom type that can represent primitive types, union types, object types, or even function signatures.
var user = "JohnDoe";
var age = 25;
console.log(user); // Output: JohnDoe
console.log(age); // Output: 25
console.log('---------------');
var Alex = {
    name: "Allen Walker",
    age: 30,
    isEmployed: true,
    address: {
        city: 'Pune',
        country: 'India'
    }
};
console.log(Alex); // Output: { name: 'Allen Walker', age: 30, isEmployed: true }
console.log('---------------');
var item1 = {
    name: 'pen',
    price: 10,
    quantity: 5
};
var calculateTotalPrice = function (product) {
    return "".concat(product.name, " total cost ").concat(product.price * product.quantity);
};
console.log(calculateTotalPrice(item1));
console.log('---------------');
var person = {
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
console.log('---------------');
var emp = {
    name: "Alice",
    privileges: ["create-server"],
    startDate: new Date(),
};
console.log(emp);
// Output: { name: 'Alice', privileges: ['create-server'], startDate: 2024-08-10T00:00:00.000Z }
