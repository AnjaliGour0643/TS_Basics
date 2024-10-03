function scopeDemo() {
    // Function scope
    var functionVar = "I am a function-scoped variable";
    var functionLet = "I am a function-scoped let variable";
    var functionConst = "I am a function-scoped const variable";
    console.log(functionVar); // Accessible here
    console.log(functionLet); // Accessible here
    console.log(functionConst); // Accessible here
}
scopeDemo();
// Trying to access function-scoped variables outside the function
// console.log(functionVar);     // Error: 'functionVar' is not defined
// console.log(functionLet);     // Error: 'functionLet' is not defined
// console.log(functionConst);   // Error: 'functionConst' is not defined
