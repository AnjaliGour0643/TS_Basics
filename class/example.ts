// Example 1

class Novel {
    title: string;
    author: string;
    year: number;

    constructor(title: string, author: string, year: number) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    displayInfo() {
        console.log(`"${this.title}" by ${this.author}, published in ${this.year}.`);
    }
}
const book = new Novel('1984', 'George Orwell', 1949);
book.displayInfo(); // Output: "1984" by George Orwell, published in 1949.

console.log('------------')


// Example 2

class Laptop {
    brand: string;
    model: string;
    specs: string;

    constructor(brand: string, model: string, specs: string) {
        this.brand = brand;
        this.model = model;
        this.specs = specs;
    }

    showSpecs() {
        console.log(`${this.brand} ${this.model} specifications: ${this.specs}`);
    }
}
const laptop = new Laptop('Apple', 'MacBook Pro', '16GB RAM, 512GB SSD');
laptop.showSpecs(); // Output: Apple MacBook Pro specifications: 16GB RAM, 512GB SSD

