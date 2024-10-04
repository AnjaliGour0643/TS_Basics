class MusicalInstrument {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    play(): void {
        console.log(`Playing the ${this.name}.`);
    }
}

class Guitar extends MusicalInstrument {
    stringCount: number;

    constructor(name: string, stringCount: number) {
        super(name);
        this.stringCount = stringCount;
    }

    strum(): void {
        console.log(`Strumming the ${this.stringCount}-string ${this.name}.`);
    }
}

class Piano extends MusicalInstrument {
    keyCount: number;

    constructor(name: string, keyCount: number) {
        super(name);
        this.keyCount = keyCount;
    }

    pressKey(): void {
        console.log(`Pressing a key on the ${this.keyCount}-key ${this.name}.`);
    }
}

let myGuitar = new Guitar("Electric Guitar", 6);
myGuitar.play(); // Output: Playing the Electric Guitar.
myGuitar.strum(); // Output: Strumming the 6-string Electric Guitar.

let myPiano = new Piano("Grand Piano", 88);
myPiano.play(); // Output: Playing the Grand Piano.
myPiano.pressKey(); // Output: Pressing a key on the 88-key Grand Piano.
