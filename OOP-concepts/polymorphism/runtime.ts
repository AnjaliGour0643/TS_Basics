// Method Overriding (Runtime Polymorphism) - dynamic/late binding

// Dynamic Binding (Late Binding):
// What is it? 
// -> Dynamic binding occurs when the method to be executed is determined at runtime.
// Who is responsible?
// -> The runtime environment (here - Node.js) is responsible for deciding which method implementation to call based on the object type.
// When is it used? 
// -> Method overriding is an example of dynamic binding because the method that gets executed is chosen at runtime based on the actual object.


class Luggage {
    capacity: number;

    constructor(capacity: number) {
        this.capacity = capacity;
    }
    // Method to be overridden by child classes
    pack(): void {
        console.log("Packing items in generic luggage");
    }
}

class Suitcase extends Luggage {
    constructor(capacity: number) {
        super(capacity);
    }
    // Overriding the pack method
    pack(): void {
        console.log(`Packing items in a suitcase with capacity of ${this.capacity} liters`);
    }
}

class Backpack extends Luggage {
    constructor(capacity: number) {
        super(capacity);
    }
    // Overriding the pack method
    pack(): void {
        console.log(`Packing items in a backpack with capacity of ${this.capacity} liters`);
    }
}

class DuffelBag extends Luggage {
    constructor(capacity: number) {
        super(capacity);
    }
    // Overriding the pack method
    pack(): void {
        console.log(`Packing items in a duffel bag with capacity of ${this.capacity} liters`);
    }
}

// Runtime polymorphism with dynamic binding
let luggage: Luggage;

luggage = new Suitcase(50);
luggage.pack();  // Output: Packing items in a suitcase with capacity of 50 liters

luggage = new Backpack(30);
luggage.pack();  // Output: Packing items in a backpack with capacity of 30 liters

luggage = new DuffelBag(40);
luggage.pack();  // Output: Packing items in a duffel bag with capacity of 40 liters


// The code demonstrates runtime polymorphism, where the actual method that gets called (for example, Suitcase's pack(), Backpack's pack()) 
// depends on the object assigned to luggage at runtime, even though the variable itself is typed as Luggage.


console.log('----------------')

// Defining an interface for a ObjectState
interface ObjectState {
    describe(): void;
}

// Implementing the interface in different classes representing ObjectStates
class SolidState implements ObjectState {
    describe(): void {
        console.log("I am in solid State, I have a definite shape and volume.");
    }
}

class LiquidState implements ObjectState {
    describe(): void {
        console.log("I am in liquid State, I take the shape of my container but have a definite volume.");
    }
}

class GasState implements ObjectState {
    describe(): void {
        console.log("I am in gas State, I have neither a definite shape nor a definite volume.");
    }
}

let matterObjectState: ObjectState;

matterObjectState = new SolidState();
matterObjectState.describe();  // Output: I am in solid State, I have a definite shape and volume.

matterObjectState = new LiquidState();
matterObjectState.describe();  // Output: I am in liquid State, I take the shape of my container but have a definite volume.

matterObjectState = new GasState();
matterObjectState.describe();  // Output: I am in gas State, I have neither a definite shape nor a definite volume.
