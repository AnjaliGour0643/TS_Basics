// Define a type for the parent object 'animal'
type Animal = {
    species: string;
    sound: () => void;
};

// Parent object with properties and methods
let animal: Animal = {
    species: "Animal",
    sound() {
        console.log("Makes a sound");
    }
};

// Define a type for the child object 'dog' extending 'Animal'
type Dog = Animal & {
    breed: string;
};

// Child object inheriting from 'animal'
let dog: Dog = {
    breed: "Labrador",
    species: animal.species,  // Accessing species directly from animal
    sound: animal.sound        // Accessing sound method directly from animal
};

// Accessing properties and methods from the parent (animal)
console.log(dog.species);  // Output: Animal
dog.sound();               // Output: Makes a sound
