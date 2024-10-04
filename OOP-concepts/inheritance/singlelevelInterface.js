// Implementing the child interface
var MyWashingMachine = /** @class */ (function () {
    function MyWashingMachine(brand, power, loadCapacity) {
        this.brand = brand;
        this.power = power;
        this.loadCapacity = loadCapacity;
    }
    MyWashingMachine.prototype.turnOn = function () {
        console.log("".concat(this.brand, " washing machine is turned on, consuming ").concat(this.power, " watts."));
    };
    MyWashingMachine.prototype.washClothes = function () {
        console.log("Washing clothes with a load capacity of ".concat(this.loadCapacity, " kg."));
    };
    return MyWashingMachine;
}());
var washer = new MyWashingMachine("LG", 1500, 8);
washer.turnOn(); // Output: LG washing machine is turned on, consuming 1500 watts.
washer.washClothes(); // Output: Washing clothes with a load capacity of 8 kg.
