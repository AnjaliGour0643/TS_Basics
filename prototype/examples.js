/*
JavaScript uses prototypes for inheritance.
Objects can inherit properties and methods from other objects, which is the basis of how inheritance works in JavaScript.
--------------------------
Every function in JavaScript has a prototype property. When you create an object using a constructor function,
that object's internal [[Prototype]] property links to the prototype object of the constructor.
--------------------------
Prototypes are used to define methods and properties that are shared across all instances of an object.
For example, all arrays in JavaScript share methods like .push() and .pop() via Array.prototype.
*/
// Example 1 : Basic Example
// Step 1: Define a constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}
// Step 2: Add a method to the prototype of Person
Person.prototype.greet = function () {
    console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
};
// Step 3: Create an object using the Person constructor
var john = new Person("John Doe", 30);
john.greet(); // Output: Hello, my name is John Doe and I am 30 years old.
// Step 4: Add another method dynamically to the prototype
Person.prototype.sayGoodbye = function () {
    console.log("".concat(this.name, " says goodbye."));
};
john.sayGoodbye(); // Output: John Doe says goodbye.
console.log('--------------');
// Example 2
// Step 1: Define an object with some methods
var vehiclePrototype = {
    drive: function () {
        console.log("This vehicle is driving.");
    }
};
// Step 2: Create a new object using Object.create and set its prototype to vehiclePrototype
var car = Object.create(vehiclePrototype);
car.type = "Car";
// Step 3: Access properties and methods from the prototype
console.log(car.type); // Output: Car
car.drive(); // Output: This vehicle is driving.
console.log(car.__proto__ === vehiclePrototype); // Output: true
