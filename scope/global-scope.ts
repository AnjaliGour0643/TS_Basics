// Global scope
var globalVar: string = "I am a global variable";
let globalLet: string = "I am a global let variable";
const globalConst: string = "I am a global const variable";

function accessGlobalVariables() {
    console.log(globalVar);    // Accessible here
    console.log(globalLet);     // Accessible here
    console.log(globalConst);    // Accessible here
}

accessGlobalVariables();

console.log(globalVar);    // Accessible here
console.log(globalLet);     // Accessible here
console.log(globalConst);    // Accessible here
