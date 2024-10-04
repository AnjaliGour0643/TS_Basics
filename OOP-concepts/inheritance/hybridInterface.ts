// Parent interface for media device properties
interface MediaDevice {
    brand: string;
    turnOn(): void;
}

// Interface for screen-based devices
interface ScreenDevice {
    screenSize: number;
    display(): void;
}

// Interface that extends both MediaDevice and ScreenDevice
interface Television extends MediaDevice, ScreenDevice {
    resolution: string;
}

// Implementing the child interface
class SmartTV implements Television {
    brand: string;
    screenSize: number;
    resolution: string;

    constructor(brand: string, screenSize: number, resolution: string) {
        this.brand = brand;
        this.screenSize = screenSize;
        this.resolution = resolution;
    }
    mediaType!: string;
    playMedia(): void {
        throw new Error("Method not implemented.");
    }

    turnOn(): void {
        console.log(`${this.brand} TV is now on.`);
    }

    display(): void {
        console.log(`Displaying content on a ${this.screenSize}-inch ${this.resolution} screen.`);
    }
}

let myTV = new SmartTV("Sony", 55, "4K");
myTV.turnOn(); // Output: Sony TV is now on.
myTV.display(); // Output: Displaying content on a 55-inch 4K screen.
