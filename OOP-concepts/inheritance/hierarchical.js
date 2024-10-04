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
var MusicalInstrument = /** @class */ (function () {
    function MusicalInstrument(name) {
        this.name = name;
    }
    MusicalInstrument.prototype.play = function () {
        console.log("Playing the ".concat(this.name, "."));
    };
    return MusicalInstrument;
}());
var Guitar = /** @class */ (function (_super) {
    __extends(Guitar, _super);
    function Guitar(name, stringCount) {
        var _this = _super.call(this, name) || this;
        _this.stringCount = stringCount;
        return _this;
    }
    Guitar.prototype.strum = function () {
        console.log("Strumming the ".concat(this.stringCount, "-string ").concat(this.name, "."));
    };
    return Guitar;
}(MusicalInstrument));
var Piano = /** @class */ (function (_super) {
    __extends(Piano, _super);
    function Piano(name, keyCount) {
        var _this = _super.call(this, name) || this;
        _this.keyCount = keyCount;
        return _this;
    }
    Piano.prototype.pressKey = function () {
        console.log("Pressing a key on the ".concat(this.keyCount, "-key ").concat(this.name, "."));
    };
    return Piano;
}(MusicalInstrument));
var myGuitar = new Guitar("Electric Guitar", 6);
myGuitar.play(); // Output: Playing the Electric Guitar.
myGuitar.strum(); // Output: Strumming the 6-string Electric Guitar.
var myPiano = new Piano("Grand Piano", 88);
myPiano.play(); // Output: Playing the Grand Piano.
myPiano.pressKey(); // Output: Pressing a key on the 88-key Grand Piano.
