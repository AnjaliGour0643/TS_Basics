function demonstrateBlockScope() {
    if (true) {
        // Block scope
        var blockVar = "I am a block-scoped variable using var";
        var blockLet = "I am a block-scoped variable using let";
        var blockConst = "I am a block-scoped variable using const";
        console.log(blockVar); // Accessible here
        console.log(blockLet); // Accessible here
        console.log(blockConst); // Accessible here
    }
    // Accessing block-scoped variables outside the block
    console.log(blockVar); // Accessible here (due to var being function-scoped)
    // console.log(blockLet);      // Error: 'blockLet' is not defined
    // console.log(blockConst);    // Error: 'blockConst' is not defined
}
demonstrateBlockScope();
