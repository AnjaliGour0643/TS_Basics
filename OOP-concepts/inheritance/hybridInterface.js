// Implementing the child interface
var SmartTV = /** @class */ (function () {
    function SmartTV(brand, screenSize, resolution) {
        this.brand = brand;
        this.screenSize = screenSize;
        this.resolution = resolution;
    }
    SmartTV.prototype.playMedia = function () {
        throw new Error("Method not implemented.");
    };
    SmartTV.prototype.turnOn = function () {
        console.log("".concat(this.brand, " TV is now on."));
    };
    SmartTV.prototype.display = function () {
        console.log("Displaying content on a ".concat(this.screenSize, "-inch ").concat(this.resolution, " screen."));
    };
    return SmartTV;
}());
var myTV = new SmartTV("Sony", 55, "4K");
myTV.turnOn(); // Output: Sony TV is now on.
myTV.display(); // Output: Displaying content on a 55-inch 4K screen.
