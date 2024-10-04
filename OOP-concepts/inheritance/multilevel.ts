class Animal {
    eat() {
        console.log("Eating");
    }
}

class Mammal extends Animal {
    sleep() {
        console.log("Sleeping");
    }
}

class Dog extends Mammal {
    bark() {
        console.log("Barking");
    }
}

let myDog = new Dog();
myDog.eat();   // Output: Eating
myDog.sleep(); // Output: Sleeping
myDog.bark();  // Output: Barking
