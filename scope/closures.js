// CLOSURE - a closure gives you access to an outer function's scope from an inner function
// Example 1
function createCounter() {
    var count = 0; //     let count = 0;
    return function () {
        count++; //         count++;
        return count; //         return count;
    }; //      };
} //  };
var counter = createCounter(); // let counter = createCounter();
console.log(counter()); // 1                       // console.log(counter()); // 1
console.log(counter()); // 2                       // console.log(counter()); // 2
console.log(counter()); // 3                       // console.log(counter()); // 3
console.log('-----------------');
// Example 2
function greet(name) {
    return function () {
        return "Hello, ".concat(name, "!");
    };
}
var greetAnjali = greet("Anjali");
console.log(greetAnjali()); // Hello, Anjali!
console.log('-----------------');
// Example 3
function buildGreeting(name) {
    function greetUser(greeting) {
        return "".concat(greeting, ", ").concat(name);
    }
    return greetUser;
}
var personalizedGreet = buildGreeting("Anjali");
var message1 = personalizedGreet("Good Morning");
var message2 = personalizedGreet("Hello");
console.log(message1); // Good Morning, Anjali
console.log(message2); // Hello, Anjali
console.log('-----------------');
// Example 4
function multiplier(factor) {
    return function (n) {
        return n * factor;
    };
}
var timesTwo = multiplier(2);
console.log(timesTwo(5)); // 10
var timesSeven = multiplier(7);
console.log(timesSeven(5)); // 35
