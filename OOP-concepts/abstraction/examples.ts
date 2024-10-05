// Abstraction using abstract classes

// Abstract class definition
abstract class ElectricAppliance {
    protected brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    // Abstract method (no implementation here)
    abstract turnOn(): void;

    // Regular method
    getBrand(): string {
        return this.brand;
    }
}

// Subclass of Appliance
class WashingMachine1 extends ElectricAppliance {
    private load_Capacity: number;

    constructor(brand: string, loadCapacity: number) {
        super(brand);
        this.load_Capacity = loadCapacity;
    }

    // Implementing the abstract method
    turnOn(): void {
        console.log(`${this.brand} washing machine is now running with a load capacity of ${this.load_Capacity} kg.`);
    }
}

// Subclass of Appliance
class Refrigerator1 extends ElectricAppliance {
    private temperature: number;

    constructor(brand: string, temperature: number) {
        super(brand);
        this.temperature = temperature;
    }

    // Implementing the abstract method
    turnOn(): void {
        console.log(`${this.brand} refrigerator is set to ${this.temperature}°C.`);
    }
}

// Creating instances of subclasses
const washer1 = new WashingMachine1("Samsung", 7);
const fridge1 = new Refrigerator1("LG", -5);

washer1.turnOn();  // Output: Samsung washing machine is now running with a load capacity of 7 kg.
fridge1.turnOn();  // Output: LG refrigerator is set to -5°C.




console.log('-----------------')
// Abstraction using interfaces

// Defining an interface for a beverage
interface Beverage {
    name: string;
    volume: number;

    // Method to be implemented by the class
    drink(): void;
    refill(amount: number): void;
}

// Implementing the interface in a class
class Coffee implements Beverage {
    name: string;
    volume: number;
    isHot: boolean;

    constructor(name: string, volume: number, isHot: boolean) {
        this.name = name;
        this.volume = volume;
        this.isHot = isHot;
    }

    drink(): void {
        console.log(`Drinking ${this.volume} ml of ${this.isHot ? "hot" : "cold"} ${this.name}.`);
    }

    refill(amount: number): void {
        this.volume += amount;
        console.log(`Refilled ${amount} ml of ${this.name}. Current volume: ${this.volume} ml.`);
    }
}

// Implementing the interface in another class
class Juice implements Beverage {
    name: string;
    volume: number;
    isFresh: boolean;

    constructor(name: string, volume: number, isFresh: boolean) {
        this.name = name;
        this.volume = volume;
        this.isFresh = isFresh;
    }

    drink(): void {
        console.log(`Drinking ${this.volume} ml of ${this.isFresh ? "fresh" : "store-bought"} ${this.name}.`);
    }

    refill(amount: number): void {
        this.volume += amount;
        console.log(`Refilled ${amount} ml of ${this.name}. Current volume: ${this.volume} ml.`);
    }
}

// Creating instances of the classes
const myCoffee = new Coffee("Espresso", 150, true);
const myJuice = new Juice("Orange Juice", 250, true);

myCoffee.drink();  // Output: Drinking 150 ml of hot Espresso.
myJuice.drink();   // Output: Drinking 250 ml of fresh Orange Juice.

myCoffee.refill(50);  // Output: Refilled 50 ml of Espresso. Current volume: 200 ml.
myJuice.refill(100);  // Output: Refilled 100 ml of Orange Juice. Current volume: 350 ml.




console.log('-----------------')
// Using Abstract Classes and Interfaces Together


// Define an interface for electronic devices
interface ElectronicDevice {
    name: string;
    powerOn(): void;
    powerOff(): void;
}

// Define an abstract class for smart devices that implements the interface
abstract class SmartDevice implements ElectronicDevice {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Implementing methods from the interface
    powerOn(): void {
        console.log(`${this.name} is powering on.`);
    }

    powerOff(): void {
        console.log(`${this.name} is powering off.`);
    }

    // Abstract method that subclasses must implement
    abstract connectToWifi(): void;
}

// Subclass of SmartDevice
class SmartLight extends SmartDevice {
    constructor(name: string) {
        super(name);
    }

    // Implementing the abstract method
    connectToWifi(): void {
        console.log(`${this.name} is connecting to WiFi.`);
    }

    adjustBrightness(level: number): void {
        console.log(`${this.name}'s brightness is set to ${level}%.`);
    }
}

// Subclass of SmartDevice
class SmartThermostat extends SmartDevice {
    constructor(name: string) {
        super(name);
    }

    // Implementing the abstract method
    connectToWifi(): void {
        console.log(`${this.name} is connecting to WiFi.`);
    }

    setTemperature(temp: number): void {
        console.log(`${this.name} is set to ${temp}°C.`);
    }
}

// Creating instances
const light = new SmartLight("Philips Hue");
const thermostat = new SmartThermostat("Nest Thermostat");

light.powerOn();             // Output: Philips Hue is powering on.
light.connectToWifi();       // Output: Philips Hue is connecting to WiFi.
light.adjustBrightness(80);  // Output: Philips Hue's brightness is set to 80%.

thermostat.powerOn();        // Output: Nest Thermostat is powering on.
thermostat.connectToWifi();  // Output: Nest Thermostat is connecting to WiFi.
thermostat.setTemperature(24);  // Output: Nest Thermostat is set to 24°C.
