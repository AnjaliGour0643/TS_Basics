// Global scope
var globalVar = "I am a global variable";
var globalLet = "I am a global let variable";
var globalConst = "I am a global const variable";
function accessGlobalVariables() {
    console.log(globalVar); // Accessible here
    console.log(globalLet); // Accessible here
    console.log(globalConst); // Accessible here
}
accessGlobalVariables();
console.log(globalVar); // Accessible here
console.log(globalLet); // Accessible here
console.log(globalConst); // Accessible here
