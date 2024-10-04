// Step 1: Define an abstract class
abstract class Shape {
    // Abstract method that must be implemented by derived classes
    abstract getArea(): number;

    // Concrete method with implementation
    displayArea(): void {
        console.log(`The area of the shape is: ${this.getArea()} units²`);
    }
}

// Step 2: Define a Circle class that extends Shape
class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super(); // Call the constructor of the base class
        this.radius = radius;
    }

    // Implement the abstract method
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

// Step 3: Define a Rectangle class that extends Shape
class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        super(); // Call the constructor of the base class
        this.width = width;
        this.height = height;
    }

    // Implement the abstract method
    getArea(): number {
        return this.width * this.height;
    }
}

// Step 4: Create instances of Circle and Rectangle
const circle = new Circle(5);
circle.displayArea(); // Output: The area of the shape is: 78.53981633974483 units²

const rectangle = new Rectangle(4, 6);
rectangle.displayArea(); // Output: The area of the shape is: 24 units²
