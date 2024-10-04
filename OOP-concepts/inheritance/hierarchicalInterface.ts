// Base interface for generic appliance properties
interface Appliance {
    brand: string;
    power: number;
    turnOn(): void;
}

// Derived interface for kitchen-specific appliances
interface KitchenAppliance extends Appliance {
    capacity: number;
}

// Derived interface for cleaning-specific appliances
interface CleaningAppliance extends Appliance {
    cleaningMode: string;
}

// Implementing KitchenAppliance
class Refrigerator implements KitchenAppliance {
    brand: string;
    power: number;
    capacity: number;

    constructor(brand: string, power: number, capacity: number) {
        this.brand = brand;
        this.power = power;
        this.capacity = capacity;
    }

    turnOn(): void {
        console.log(`${this.brand} refrigerator is turned on with ${this.power} watts.`);
    }
}

// Implementing CleaningAppliance
class VacuumCleaner implements CleaningAppliance {
    brand: string;
    power: number;
    cleaningMode: string;

    constructor(brand: string, power: number, cleaningMode: string) {
        this.brand = brand;
        this.power = power;
        this.cleaningMode = cleaningMode;
    }

    turnOn(): void {
        console.log(`${this.brand} vacuum cleaner is turned on in ${this.cleaningMode} mode.`);
    }
}

let fridge = new Refrigerator("Samsung", 800, 300);
fridge.turnOn(); // Output: Samsung refrigerator is turned on with 800 watts.

let vacuum = new VacuumCleaner("Dyson", 1200, "Turbo");
vacuum.turnOn(); // Output: Dyson vacuum cleaner is turned on in Turbo mode.
