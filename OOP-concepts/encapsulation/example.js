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
var Product = /** @class */ (function () {
    function Product(name, price) {
        this._name = name;
        this._price = price;
    }
    Object.defineProperty(Product.prototype, "name", {
        // Getter for name
        get: function () {
            return this._name;
        },
        // Setter for name
        set: function (value) {
            if (value) {
                this._name = value;
            }
            else {
                console.log("Invalid name");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        // Getter for price
        get: function () {
            return this._price;
        },
        // Setter for price
        set: function (value) {
            if (value > 0) {
                this._price = value;
            }
            else {
                console.log("Price must be positive");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var product = new Product("Laptop", 1200);
console.log(product.name); // Output: Laptop
product.name = "Smartphone";
console.log(product.name); // Output: Smartphone
console.log(product.price); // Output: 1200
product.price = 1500;
console.log(product.price); // Output: 1500
console.log('------------------');
// Encapsulation with readonly
var Users = /** @class */ (function () {
    function Users(username, userId) {
        this.username = username;
        this.userId = userId;
    }
    Users.prototype.getUserInfo = function () {
        console.log("Username: ".concat(this.username, ", User ID: ").concat(this.userId));
    };
    Users.prototype.setUsername = function (newUsername) {
        this.username = newUsername;
    };
    return Users;
}());
var user = new Users("john_doe", "ABC123");
user.getUserInfo(); // Output: Username: john_doe, User ID: ABC123
user.setUsername("jane_doe");
user.getUserInfo(); // Output: Username: jane_doe, User ID: ABC123
// user.userId = "XYZ456";  // Error: Cannot assign to 'userId' because it is a read-only property.
console.log('------------------');
// Encapsulation with private fields
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    // Public method to access private balance
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    // Public method to deposit money
    BankAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
        }
    };
    // Public method to withdraw money
    BankAccount.prototype.withdraw = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Insufficient balance");
        }
    };
    return BankAccount;
}());
var account = new BankAccount("123456789", 1000);
console.log(account.getBalance()); // Output: 1000
account.deposit(500);
console.log(account.getBalance()); // Output: 1500
account.withdraw(200);
console.log(account.getBalance()); // Output: 1300
console.log('------------------');
// Encapsulation with protected fields
var Vehicle = /** @class */ (function () {
    function Vehicle(speed) {
        this.speed = speed;
    }
    Vehicle.prototype.accelerate = function (amount) {
        this.speed += amount;
        console.log("Vehicle accelerated. New speed: ".concat(this.speed));
    };
    Vehicle.prototype.brake = function (amount) {
        this.speed -= amount;
        console.log("Vehicle slowed down. New speed: ".concat(this.speed));
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(speed, model) {
        var _this = _super.call(this, speed) || this;
        _this.model = model;
        return _this;
    }
    Car.prototype.displayInfo = function () {
        console.log("Car model: ".concat(this.model, ", Speed: ").concat(this.speed));
    };
    return Car;
}(Vehicle));
var car = new Car(50, "Tesla Model 3");
car.accelerate(20); // Output: Vehicle accelerated. New speed: 70
car.brake(10); // Output: Vehicle slowed down. New speed: 60
car.displayInfo(); // Output: Car model: Tesla Model 3, Speed: 60
