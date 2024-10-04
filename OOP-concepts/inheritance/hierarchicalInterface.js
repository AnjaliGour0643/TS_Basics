// Implementing KitchenAppliance
var Refrigerator = /** @class */ (function () {
    function Refrigerator(brand, power, capacity) {
        this.brand = brand;
        this.power = power;
        this.capacity = capacity;
    }
    Refrigerator.prototype.turnOn = function () {
        console.log("".concat(this.brand, " refrigerator is turned on with ").concat(this.power, " watts."));
    };
    return Refrigerator;
}());
// Implementing CleaningAppliance
var VacuumCleaner = /** @class */ (function () {
    function VacuumCleaner(brand, power, cleaningMode) {
        this.brand = brand;
        this.power = power;
        this.cleaningMode = cleaningMode;
    }
    VacuumCleaner.prototype.turnOn = function () {
        console.log("".concat(this.brand, " vacuum cleaner is turned on in ").concat(this.cleaningMode, " mode."));
    };
    return VacuumCleaner;
}());
var fridge = new Refrigerator("Samsung", 800, 300);
fridge.turnOn(); // Output: Samsung refrigerator is turned on with 800 watts.
var vacuum = new VacuumCleaner("Dyson", 1200, "Turbo");
vacuum.turnOn(); // Output: Dyson vacuum cleaner is turned on in Turbo mode.
