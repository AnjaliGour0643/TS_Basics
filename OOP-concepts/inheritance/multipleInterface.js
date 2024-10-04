// Implementing the child interface
var MyCoffeeMachine = /** @class */ (function () {
    function MyCoffeeMachine(brand, brewTime) {
        this.brand = brand;
        this.brewTime = brewTime;
    }
    MyCoffeeMachine.prototype.turnOn = function () {
        console.log("".concat(this.brand, " coffee machine is turned on."));
    };
    MyCoffeeMachine.prototype.brewCoffee = function () {
        console.log("Brewing coffee in ".concat(this.brewTime, " minutes."));
    };
    return MyCoffeeMachine;
}());
var coffeeMachine = new MyCoffeeMachine("Nespresso", 5);
coffeeMachine.turnOn(); // Output: Nespresso coffee machine is turned on.
coffeeMachine.brewCoffee(); // Output: Brewing coffee in 5 minutes.
