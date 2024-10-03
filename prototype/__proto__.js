// Parent object with properties and methods
var animal = {
    species: "Animal",
    sound: function () {
        console.log("Makes a sound");
    }
};
// Child object inheriting from 'animal'
var dog = {
    breed: "Labrador",
    species: animal.species, // Accessing species directly from animal
    sound: animal.sound // Accessing sound method directly from animal
};
// Accessing properties and methods from the parent (animal)
console.log(dog.species); // Output: Animal
dog.sound(); // Output: Makes a sound
