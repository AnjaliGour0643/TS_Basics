// Abstraction using abstract classes
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Abstract class definition
var ElectricAppliance = /** @class */ (function () {
    function ElectricAppliance(brand) {
        this.brand = brand;
    }
    // Regular method
    ElectricAppliance.prototype.getBrand = function () {
        return this.brand;
    };
    return ElectricAppliance;
}());
// Subclass of Appliance
var WashingMachine1 = /** @class */ (function (_super) {
    __extends(WashingMachine1, _super);
    function WashingMachine1(brand, loadCapacity) {
        var _this = _super.call(this, brand) || this;
        _this.load_Capacity = loadCapacity;
        return _this;
    }
    // Implementing the abstract method
    WashingMachine1.prototype.turnOn = function () {
        console.log("".concat(this.brand, " washing machine is now running with a load capacity of ").concat(this.load_Capacity, " kg."));
    };
    return WashingMachine1;
}(ElectricAppliance));
// Subclass of Appliance
var Refrigerator1 = /** @class */ (function (_super) {
    __extends(Refrigerator1, _super);
    function Refrigerator1(brand, temperature) {
        var _this = _super.call(this, brand) || this;
        _this.temperature = temperature;
        return _this;
    }
    // Implementing the abstract method
    Refrigerator1.prototype.turnOn = function () {
        console.log("".concat(this.brand, " refrigerator is set to ").concat(this.temperature, "\u00B0C."));
    };
    return Refrigerator1;
}(ElectricAppliance));
// Creating instances of subclasses
var washer1 = new WashingMachine1("Samsung", 7);
var fridge1 = new Refrigerator1("LG", -5);
washer1.turnOn(); // Output: Samsung washing machine is now running with a load capacity of 7 kg.
fridge1.turnOn(); // Output: LG refrigerator is set to -5°C.
console.log('-----------------');
// Implementing the interface in a class
var Coffee = /** @class */ (function () {
    function Coffee(name, volume, isHot) {
        this.name = name;
        this.volume = volume;
        this.isHot = isHot;
    }
    Coffee.prototype.drink = function () {
        console.log("Drinking ".concat(this.volume, " ml of ").concat(this.isHot ? "hot" : "cold", " ").concat(this.name, "."));
    };
    Coffee.prototype.refill = function (amount) {
        this.volume += amount;
        console.log("Refilled ".concat(amount, " ml of ").concat(this.name, ". Current volume: ").concat(this.volume, " ml."));
    };
    return Coffee;
}());
// Implementing the interface in another class
var Juice = /** @class */ (function () {
    function Juice(name, volume, isFresh) {
        this.name = name;
        this.volume = volume;
        this.isFresh = isFresh;
    }
    Juice.prototype.drink = function () {
        console.log("Drinking ".concat(this.volume, " ml of ").concat(this.isFresh ? "fresh" : "store-bought", " ").concat(this.name, "."));
    };
    Juice.prototype.refill = function (amount) {
        this.volume += amount;
        console.log("Refilled ".concat(amount, " ml of ").concat(this.name, ". Current volume: ").concat(this.volume, " ml."));
    };
    return Juice;
}());
// Creating instances of the classes
var myCoffee = new Coffee("Espresso", 150, true);
var myJuice = new Juice("Orange Juice", 250, true);
myCoffee.drink(); // Output: Drinking 150 ml of hot Espresso.
myJuice.drink(); // Output: Drinking 250 ml of fresh Orange Juice.
myCoffee.refill(50); // Output: Refilled 50 ml of Espresso. Current volume: 200 ml.
myJuice.refill(100); // Output: Refilled 100 ml of Orange Juice. Current volume: 350 ml.
console.log('-----------------');
// Define an abstract class for smart devices that implements the interface
var SmartDevice = /** @class */ (function () {
    function SmartDevice(name) {
        this.name = name;
    }
    // Implementing methods from the interface
    SmartDevice.prototype.powerOn = function () {
        console.log("".concat(this.name, " is powering on."));
    };
    SmartDevice.prototype.powerOff = function () {
        console.log("".concat(this.name, " is powering off."));
    };
    return SmartDevice;
}());
// Subclass of SmartDevice
var SmartLight = /** @class */ (function (_super) {
    __extends(SmartLight, _super);
    function SmartLight(name) {
        return _super.call(this, name) || this;
    }
    // Implementing the abstract method
    SmartLight.prototype.connectToWifi = function () {
        console.log("".concat(this.name, " is connecting to WiFi."));
    };
    SmartLight.prototype.adjustBrightness = function (level) {
        console.log("".concat(this.name, "'s brightness is set to ").concat(level, "%."));
    };
    return SmartLight;
}(SmartDevice));
// Subclass of SmartDevice
var SmartThermostat = /** @class */ (function (_super) {
    __extends(SmartThermostat, _super);
    function SmartThermostat(name) {
        return _super.call(this, name) || this;
    }
    // Implementing the abstract method
    SmartThermostat.prototype.connectToWifi = function () {
        console.log("".concat(this.name, " is connecting to WiFi."));
    };
    SmartThermostat.prototype.setTemperature = function (temp) {
        console.log("".concat(this.name, " is set to ").concat(temp, "\u00B0C."));
    };
    return SmartThermostat;
}(SmartDevice));
// Creating instances
var light = new SmartLight("Philips Hue");
var thermostat = new SmartThermostat("Nest Thermostat");
light.powerOn(); // Output: Philips Hue is powering on.
light.connectToWifi(); // Output: Philips Hue is connecting to WiFi.
light.adjustBrightness(80); // Output: Philips Hue's brightness is set to 80%.
thermostat.powerOn(); // Output: Nest Thermostat is powering on.
thermostat.connectToWifi(); // Output: Nest Thermostat is connecting to WiFi.
thermostat.setTemperature(24); // Output: Nest Thermostat is set to 24°C.
