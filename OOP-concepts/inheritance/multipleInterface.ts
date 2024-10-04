// Parent interface for beverage machine properties
interface BeverageMachine {
    brand: string;
    turnOn(): void;
}

// Another parent interface for beverage-specific functionalities
interface CoffeeMaker {
    brewTime: number;
    brewCoffee(): void;
}

// Child interface that extends both BeverageMachine and CoffeeMaker
interface CoffeeMachine extends BeverageMachine, CoffeeMaker {}

// Implementing the child interface
class MyCoffeeMachine implements CoffeeMachine {
    brand: string;
    brewTime: number;

    constructor(brand: string, brewTime: number) {
        this.brand = brand;
        this.brewTime = brewTime;
    }

    turnOn(): void {
        console.log(`${this.brand} coffee machine is turned on.`);
    }

    brewCoffee(): void {
        console.log(`Brewing coffee in ${this.brewTime} minutes.`);
    }
}

let coffeeMachine = new MyCoffeeMachine("Nespresso", 5);
coffeeMachine.turnOn(); // Output: Nespresso coffee machine is turned on.
coffeeMachine.brewCoffee(); // Output: Brewing coffee in 5 minutes.
