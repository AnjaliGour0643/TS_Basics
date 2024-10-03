/**
 * An Immediately Invoked Function Expression (IIFE) is a JavaScript (and TypeScript) design pattern -
 * that allows you to create a function that runs as soon as it is defined. 
 * It helps to create a local scope to avoid polluting the global scope and can be useful for data encapsulation.
 */

// Example 1 : Basic IIFE

(function() {
    console.log("This function runs immediately!");
})();



// Example 2 : IIFE with Parameters

(function(name: string) {
    console.log(`Hello, ${name}!`);
})("Anjali");



// Example 3 : IIFE for Data Encapsulation

const counter = (function() {
    let count = 0; // Private variable

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
})();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount());  // 1



// Example 4 : IIFE with Multiple Functions

const mathUtils = (function() {
    const pi = 3.14;

    const add = (a: number, b: number): number => a + b;
    const subtract = (a: number, b: number): number => a - b;

    return {
        add,
        subtract,
        getPi: () => pi
    };
})();

console.log(mathUtils.add(5, 3));        // 8
console.log(mathUtils.subtract(10, 4));  // 6
console.log(mathUtils.getPi());          // 3.14


