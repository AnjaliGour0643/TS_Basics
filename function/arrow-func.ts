// Example 1

const divide = (a : number, b : number) : number => a/b
console.log(divide(34, 2))

console.log('----------------')

// Example 2 : func with union type parameter

const printValue = (value: string | number): void => {
    if (typeof value === "string") {
        console.log(`This is a string: ${value.toUpperCase()}`)
    } else {
        console.log(`This is a number: ${value.toFixed(2)}`)
    }
}
printValue("Hello"); // This is a string: HELLO
printValue(123.4567); // This is a number: 123.46

console.log('----------------')

// Example 3 : func with union return type
const getLength = (value: string | number): number | string => {
    if (typeof value === "string") {
        return `Length of the string is ${value.length}`
    } else {
        return value.toString().length
    }
}
console.log(getLength("TypeScript")); // Length of the string is 10
console.log(getLength(123456));   // 6

console.log('----------------')

// Example 4: Arrow Function with Union Type for Arrays
const printLength = (value: string | number): number | string => {
    if (typeof value === "string") {
        return `Length of the string is ${value.length}`;
    } else {
        return value.toString().length;
    }
};
console.log(printLength("Learning")); // Length of the string is 8
console.log(printLength(127863456));   // 9
