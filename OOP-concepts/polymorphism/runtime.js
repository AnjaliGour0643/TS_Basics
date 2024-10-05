// Method Overriding (Runtime Polymorphism) - dynamic/late binding
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
// Dynamic Binding (Late Binding):
// What is it? 
// -> Dynamic binding occurs when the method to be executed is determined at runtime.
// Who is responsible?
// -> The runtime environment (here - Node.js) is responsible for deciding which method implementation to call based on the object type.
// When is it used? 
// -> Method overriding is an example of dynamic binding because the method that gets executed is chosen at runtime based on the actual object.
var Luggage = /** @class */ (function () {
    function Luggage(capacity) {
        this.capacity = capacity;
    }
    // Method to be overridden by child classes
    Luggage.prototype.pack = function () {
        console.log("Packing items in generic luggage");
    };
    return Luggage;
}());
var Suitcase = /** @class */ (function (_super) {
    __extends(Suitcase, _super);
    function Suitcase(capacity) {
        return _super.call(this, capacity) || this;
    }
    // Overriding the pack method
    Suitcase.prototype.pack = function () {
        console.log("Packing items in a suitcase with capacity of ".concat(this.capacity, " liters"));
    };
    return Suitcase;
}(Luggage));
var Backpack = /** @class */ (function (_super) {
    __extends(Backpack, _super);
    function Backpack(capacity) {
        return _super.call(this, capacity) || this;
    }
    // Overriding the pack method
    Backpack.prototype.pack = function () {
        console.log("Packing items in a backpack with capacity of ".concat(this.capacity, " liters"));
    };
    return Backpack;
}(Luggage));
var DuffelBag = /** @class */ (function (_super) {
    __extends(DuffelBag, _super);
    function DuffelBag(capacity) {
        return _super.call(this, capacity) || this;
    }
    // Overriding the pack method
    DuffelBag.prototype.pack = function () {
        console.log("Packing items in a duffel bag with capacity of ".concat(this.capacity, " liters"));
    };
    return DuffelBag;
}(Luggage));
// Runtime polymorphism with dynamic binding
var luggage;
luggage = new Suitcase(50);
luggage.pack(); // Output: Packing items in a suitcase with capacity of 50 liters
luggage = new Backpack(30);
luggage.pack(); // Output: Packing items in a backpack with capacity of 30 liters
luggage = new DuffelBag(40);
luggage.pack(); // Output: Packing items in a duffel bag with capacity of 40 liters
// The code demonstrates runtime polymorphism, where the actual method that gets called (for example, Suitcase's pack(), Backpack's pack()) 
// depends on the object assigned to luggage at runtime, even though the variable itself is typed as Luggage.
console.log('----------------');
// Implementing the interface in different classes representing ObjectStates
var SolidState = /** @class */ (function () {
    function SolidState() {
    }
    SolidState.prototype.describe = function () {
        console.log("I am in solid State, I have a definite shape and volume.");
    };
    return SolidState;
}());
var LiquidState = /** @class */ (function () {
    function LiquidState() {
    }
    LiquidState.prototype.describe = function () {
        console.log("I am in liquid State, I take the shape of my container but have a definite volume.");
    };
    return LiquidState;
}());
var GasState = /** @class */ (function () {
    function GasState() {
    }
    GasState.prototype.describe = function () {
        console.log("I am in gas State, I have neither a definite shape nor a definite volume.");
    };
    return GasState;
}());
var matterObjectState;
matterObjectState = new SolidState();
matterObjectState.describe(); // Output: I am in solid State, I have a definite shape and volume.
matterObjectState = new LiquidState();
matterObjectState.describe(); // Output: I am in liquid State, I take the shape of my container but have a definite volume.
matterObjectState = new GasState();
matterObjectState.describe(); // Output: I am in gas State, I have neither a definite shape nor a definite volume.
