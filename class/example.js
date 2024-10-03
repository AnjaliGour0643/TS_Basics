// Example 1
var Novel = /** @class */ (function () {
    function Novel(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    Novel.prototype.displayInfo = function () {
        console.log("\"".concat(this.title, "\" by ").concat(this.author, ", published in ").concat(this.year, "."));
    };
    return Novel;
}());
var book = new Novel('1984', 'George Orwell', 1949);
book.displayInfo(); // Output: "1984" by George Orwell, published in 1949.
console.log('------------');
// Example 2
var Laptop = /** @class */ (function () {
    function Laptop(brand, model, specs) {
        this.brand = brand;
        this.model = model;
        this.specs = specs;
    }
    Laptop.prototype.showSpecs = function () {
        console.log("".concat(this.brand, " ").concat(this.model, " specifications: ").concat(this.specs));
    };
    return Laptop;
}());
var laptop = new Laptop('Apple', 'MacBook Pro', '16GB RAM, 512GB SSD');
laptop.showSpecs(); // Output: Apple MacBook Pro specifications: 16GB RAM, 512GB SSD
