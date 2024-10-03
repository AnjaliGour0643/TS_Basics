// CLOSURE - a closure gives you access to an outer function's scope from an inner function

// Example 1

function createCounter(): () => number {            // function createCounter() {
    let count: number = 0;                          //     let count = 0;

    return function (): number {                    //     return function () {
        count++;                                    //         count++;
        return count;                               //         return count;
    };                                              //      };
}                                                   //  };

const counter = createCounter();                    // let counter = createCounter();
console.log(counter());  // 1                       // console.log(counter()); // 1
console.log(counter());  // 2                       // console.log(counter()); // 2
console.log(counter());  // 3                       // console.log(counter()); // 3

console.log('-----------------')


// Example 2

function greet(name: string): () => string {
    return function (): string {
        return `Hello, ${name}!`;
    };
}

const greetAnjali = greet("Anjali");
console.log(greetAnjali());  // Hello, Anjali!

console.log('-----------------')


// Example 3

function buildGreeting(name: string): (greeting: string) => string {
    
    function greetUser(greeting: string): string {
        return `${greeting}, ${name}`;
    }
    
    return greetUser;
}

let personalizedGreet = buildGreeting("Anjali");
let message1 = personalizedGreet("Good Morning");  
let message2 = personalizedGreet("Hello");         

console.log(message1);  // Good Morning, Anjali
console.log(message2);  // Hello, Anjali

console.log('-----------------')


// Example 4

function multiplier(factor: number): (n: number) => number {
    return function (n: number): number {
        return n * factor;
    };
}

const timesTwo = multiplier(2);
console.log(timesTwo(5));  // 10

const timesSeven = multiplier(7);
console.log(timesSeven(5));  // 35
