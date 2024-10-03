function scopeDemo() {
    // Function scope
    var functionVar: string = "I am a function-scoped variable";
    let functionLet: string = "I am a function-scoped let variable";
    const functionConst: string = "I am a function-scoped const variable";

    console.log(functionVar);     // Accessible here
    console.log(functionLet);     // Accessible here
    console.log(functionConst);   // Accessible here
}

scopeDemo();

// Trying to access function-scoped variables outside the function
// console.log(functionVar);     // Error: 'functionVar' is not defined
// console.log(functionLet);     // Error: 'functionLet' is not defined
// console.log(functionConst);   // Error: 'functionConst' is not defined



