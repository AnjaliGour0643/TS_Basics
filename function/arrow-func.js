// Example 1
var divide = function (a, b) { return a / b; };
console.log(divide(34, 2));
console.log('----------------');
// Example 2 : func with union type parameter
var printValue = function (value) {
    if (typeof value === "string") {
        console.log("This is a string: ".concat(value.toUpperCase()));
    }
    else {
        console.log("This is a number: ".concat(value.toFixed(2)));
    }
};
printValue("Hello"); // This is a string: HELLO
printValue(123.4567); // This is a number: 123.46
console.log('----------------');
// Example 3 : func with union return type
var getLength = function (value) {
    if (typeof value === "string") {
        return "Length of the string is ".concat(value.length);
    }
    else {
        return value.toString().length;
    }
};
console.log(getLength("TypeScript")); // Length of the string is 10
console.log(getLength(123456)); // 6
console.log('----------------');
// Example 4: Arrow Function with Union Type for Arrays
var printLength = function (value) {
    if (typeof value === "string") {
        return "Length of the string is ".concat(value.length);
    }
    else {
        return value.toString().length;
    }
};
console.log(printLength("Learning")); // Length of the string is 8
console.log(printLength(127863456)); //9
