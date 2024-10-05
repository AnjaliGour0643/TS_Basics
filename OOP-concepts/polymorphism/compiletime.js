// Polymorphism : ability of a function, object, or method to take on many forms.
/* Polymorphism can be achieved in TypeScript through:

    Method Overloading (Compile-Time Polymorphism) - static/early binding
    Method Overriding (Runtime Polymorphism) - dynamic/late binding
    Interface Polymorphism
*/
// ===============================================================================
// Method Overloading (Compile-Time Polymorphism)
// Static Binding (Early Binding):
// What is it?      
// -> Static binding occurs when the method to be executed is determined at compile time.
// Who is responsible?      
// -> The compiler is responsible for determining which method to call based on the method signatures and argument types.
// When is it used?
// ->  Method overloading is an example of static binding because the method to be executed is chosen during compilation based on the arguments.
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    // Single implementation for both overloads
    Calculator.prototype.add = function (a, b) {
        if (typeof a === "number" && typeof b === "number") {
            return a + b;
        }
        else if (typeof a === "string" && typeof b === "string") {
            return a + b;
        }
    };
    return Calculator;
}());
var calc = new Calculator();
console.log(calc.add(5, 10)); // Output: 15
console.log(calc.add("Hello, ", "World!")); // Output: Hello, World!
console.log('----------------');
var CountryInfo = /** @class */ (function () {
    function CountryInfo() {
    }
    // Implementation that handles all overloads
    CountryInfo.prototype.getInfo = function (country, population, continent) {
        if (population && continent) {
            return "".concat(country, " has a population of ").concat(population, " million and is located in ").concat(continent, ".");
        }
        else if (population) {
            return "".concat(country, " has a population of ").concat(population, " million.");
        }
        else {
            return "".concat(country, " is a beautiful country.");
        }
    };
    return CountryInfo;
}());
// Static binding at compile time
var countryInfo = new CountryInfo();
console.log(countryInfo.getInfo("India")); // Output: India is a beautiful country.
console.log(countryInfo.getInfo("India", 1380)); // Output: India has a population of 1380 million.
console.log(countryInfo.getInfo("India", 1380, "Asia")); // Output: India has a population of 1380 million and is located in Asia.
