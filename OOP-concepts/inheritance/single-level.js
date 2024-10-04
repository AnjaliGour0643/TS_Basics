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
var Gadget = /** @class */ (function () {
    function Gadget(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    Gadget.prototype.turnOn = function () {
        console.log("".concat(this.brand, " ").concat(this.model, " is turned on."));
    };
    return Gadget;
}());
var Smartphone = /** @class */ (function (_super) {
    __extends(Smartphone, _super);
    function Smartphone(brand, model, os) {
        var _this = _super.call(this, brand, model) || this;
        _this.os = os;
        return _this;
    }
    Smartphone.prototype.makeCall = function (number) {
        console.log("Calling ".concat(number, " using ").concat(this.os, " on ").concat(this.brand, " ").concat(this.model, "."));
    };
    return Smartphone;
}(Gadget));
var myPhone = new Smartphone("Apple", "iPhone 14", "iOS");
myPhone.turnOn(); // Output: Apple iPhone 14 is turned on.
myPhone.makeCall("123-456-7890"); // Output: Calling 123-456-7890 using iOS on Apple iPhone 14.
