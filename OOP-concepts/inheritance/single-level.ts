class Gadget {
    brand: string;
    model: string;

    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
    }

    turnOn(): void {
        console.log(`${this.brand} ${this.model} is turned on.`);
    }
}

class Smartphone extends Gadget {
    os: string;

    constructor(brand: string, model: string, os: string) {
        super(brand, model);
        this.os = os;
    }

    makeCall(number: string): void {
        console.log(`Calling ${number} using ${this.os} on ${this.brand} ${this.model}.`);
    }
}

let myPhone = new Smartphone("Apple", "iPhone 14", "iOS");
myPhone.turnOn();  // Output: Apple iPhone 14 is turned on.
myPhone.makeCall("123-456-7890");  // Output: Calling 123-456-7890 using iOS on Apple iPhone 14.
