/**
 * A generator in TypeScript is similar to JavaScript, where it is a special type of function that can pause and resume its execution.
 * Syntax:       A generator function is declared using function* (an asterisk after function).
 * Yield:        Inside a generator, the yield keyword is used to pause the function and return a value.
 * Iterators:    Generators return an iterator object, which allows you to call next() to get the next value from the generator.
 * Pausing and Resuming:  When you call next(), it resumes the function from where it last paused (from the last yield).
 */

// Example 1----------------------------

function* numbersGen(): Generator<number> {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const gen: Generator<number> = numbersGen();
console.log(gen.next());  // returns object with value
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// Example 2
console.log("--------------------------------");

function* numGen(): Generator<number> {
    let i = 0;
    while (true) {
        yield i++;
        yield i++;
    }
}
const genr: Generator<number> = numGen();
console.log(genr.next());  // returns object with value
console.log(genr.next());


// Example 3
console.log("--------------------------------");

function* numbGen(): Generator<string> {
    let i = 0;
    while (true) {
        yield (i++).toString();
        yield (i++).toString();
    }
}
const genrt: Generator<string> = numbGen();
console.log(genrt.next());  // returns object with string value
console.log(genrt.next());


// Example 4
console.log("--------------------------------");

function* numbrGen(): Generator<string> {
    let i = 0;
    while (true) {
        yield (i++).toString();
        yield (i++).toString();
    }
}
const genrtr: Generator<string> = numbrGen();
console.log(genrtr.next().value);  // returns object's value
console.log(genrtr.next().value);


// Example 5 
console.log("--------------------------------");

// In this case, the generator runs infinitely, but values are only calculated when next() is called, making it efficient.

function* infiniteGenerator(): Generator<number> {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const infinite: Generator<number> = infiniteGenerator();
console.log(infinite.next().value); // 0
console.log(infinite.next().value); // 1
console.log(infinite.next().value); // 2
