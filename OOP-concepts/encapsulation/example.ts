class Product {
    private _name: string;
    private _price: number;

    constructor(name: string, price: number) {
        this._name = name;
        this._price = price;
    }

    // Getter for name
    public get name(): string {
        return this._name;
    }

    // Setter for name
    public set name(value: string) {
        if (value) {
            this._name = value;
        } else {
            console.log("Invalid name");
        }
    }

    // Getter for price
    public get price(): number {
        return this._price;
    }

    // Setter for price
    public set price(value: number) {
        if (value > 0) {
            this._price = value;
        } else {
            console.log("Price must be positive");
        }
    }
}

const product = new Product("Laptop", 1200);
console.log(product.name);  // Output: Laptop
product.name = "Smartphone";
console.log(product.name);  // Output: Smartphone

console.log(product.price);  // Output: 1200
product.price = 1500;
console.log(product.price);  // Output: 1500


console.log('------------------')
// Encapsulation with readonly

class Users {
    private username: string;
    private readonly userId: string;  // Read-only field, cannot be changed after initialization

    constructor(username: string, userId: string) {
        this.username = username;
        this.userId = userId;
    }

    public getUserInfo(): void {
        console.log(`Username: ${this.username}, User ID: ${this.userId}`);
    }

    public setUsername(newUsername: string): void {
        this.username = newUsername;
    }
}

const user = new Users("john_doe", "ABC123");
user.getUserInfo();   // Output: Username: john_doe, User ID: ABC123
user.setUsername("jane_doe");
user.getUserInfo();   // Output: Username: jane_doe, User ID: ABC123
// user.userId = "XYZ456";  // Error: Cannot assign to 'userId' because it is a read-only property.


console.log('------------------')

// Encapsulation with private fields

class BankAccount {
    private accountNumber: string;  // Private field
    private balance: number;        // Private field

    constructor(accountNumber: string, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    // Public method to access private balance
    public getBalance(): number {
        return this.balance;
    }

    // Public method to deposit money
    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        }
    }

    // Public method to withdraw money
    public withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient balance");
        }
    }
}

let account = new BankAccount("123456789", 1000);
console.log(account.getBalance()); // Output: 1000
account.deposit(500);
console.log(account.getBalance()); // Output: 1500
account.withdraw(200);
console.log(account.getBalance()); // Output: 1300


console.log('------------------')



// Encapsulation with protected fields

class Vehicle {
    protected speed: number;  // Protected field

    constructor(speed: number) {
        this.speed = speed;
    }

    public accelerate(amount: number): void {
        this.speed += amount;
        console.log(`Vehicle accelerated. New speed: ${this.speed}`);
    }

    public brake(amount: number): void {
        this.speed -= amount;
        console.log(`Vehicle slowed down. New speed: ${this.speed}`);
    }
}

class Car extends Vehicle {
    private model: string;

    constructor(speed: number, model: string) {
        super(speed);
        this.model = model;
    }

    public displayInfo(): void {
        console.log(`Car model: ${this.model}, Speed: ${this.speed}`);
    }
}

const car = new Car(50, "Tesla Model 3");
car.accelerate(20);  // Output: Vehicle accelerated. New speed: 70
car.brake(10);       // Output: Vehicle slowed down. New speed: 60
car.displayInfo();   // Output: Car model: Tesla Model 3, Speed: 60
