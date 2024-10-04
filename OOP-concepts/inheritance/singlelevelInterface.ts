// Parent interface for basic appliance properties
interface Appliance {
    brand: string;
    power: number;

    turnOn(): void;
}

// Child interface for washing machine-specific properties
interface WashingMachine extends Appliance {
    loadCapacity: number;

    washClothes(): void;
}

// Implementing the child interface
class MyWashingMachine implements WashingMachine {
    brand: string;
    power: number;
    loadCapacity: number;

    constructor(brand: string, power: number, loadCapacity: number) {
        this.brand = brand;
        this.power = power;
        this.loadCapacity = loadCapacity;
    }

    turnOn(): void {
        console.log(`${this.brand} washing machine is turned on, consuming ${this.power} watts.`);
    }

    washClothes(): void {
        console.log(`Washing clothes with a load capacity of ${this.loadCapacity} kg.`);
    }
}

let washer = new MyWashingMachine("LG", 1500, 8);
washer.turnOn(); // Output: LG washing machine is turned on, consuming 1500 watts.
washer.washClothes(); // Output: Washing clothes with a load capacity of 8 kg.
