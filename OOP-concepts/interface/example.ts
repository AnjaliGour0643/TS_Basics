// const greets : {
//     name : string; 
//     age : number
// } = {
//     name : 'Anjali',
//     age : 21
// }


/**
 * In TypeScript, an interface is a powerful feature that allows you to define a contract for an object's shape.
 * It specifies the properties and their types that an object must have to be considered of that particular interface type. 
 * Interfaces are primarily used for type-checking during development and do not generate any JavaScript code at runtime.
 */

// Exampple 1 : Basic example 

interface Greet {
    name : string; 
    age : number;
    greet(): void;
}

const greets : Greet = {
    name : 'Anjali',
    age : 21,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
greets.greet()


console.log('---------------')


// Example 2 

interface Lipstick {
    brand: string;
    price : number;
    quantity: number;
    shade? : string; 
}

let lipstick1: Lipstick = {
    brand: 'maybelline',
    price: 230,
    quantity : 2,
    shade : 'nude naunce'
};

let lipstick2: Lipstick = {
    brand: "mamaearth",
    price: 349,
    quantity : 1
};

const calculatePrices = (product : any) => {
    const {brand, price, quantity} = product
    return `Brand : ${product.brand},  Quantity : ${product.quantity}, Total cost : ${price*quantity}`
}

console.log(calculatePrices(lipstick1))
console.log(calculatePrices(lipstick2))


console.log('---------------')


// Example 3 : Interface with Functions

interface AddFunction {
    (a : number, b : number) : number;
}

let add : AddFunction = (x : number, y : number) => {
    return x+y
}

console.log(add(5, 9))
