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
// Step 1: Define an abstract class
var Shape = /** @class */ (function () {
    function Shape() {
    }
    // Concrete method with implementation
    Shape.prototype.displayArea = function () {
        console.log("The area of the shape is: ".concat(this.getArea(), " units\u00B2"));
    };
    return Shape;
}());
// Step 2: Define a Circle class that extends Shape
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this; // Call the constructor of the base class
        _this.radius = radius;
        return _this;
    }
    // Implement the abstract method
    Circle.prototype.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}(Shape));
// Step 3: Define a Rectangle class that extends Shape
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this; // Call the constructor of the base class
        _this.width = width;
        _this.height = height;
        return _this;
    }
    // Implement the abstract method
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
// Step 4: Create instances of Circle and Rectangle
var circle = new Circle(5);
circle.displayArea(); // Output: The area of the shape is: 78.53981633974483 units²
var rectangle = new Rectangle(4, 6);
rectangle.displayArea(); // Output: The area of the shape is: 24 units²
