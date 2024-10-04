// Base interface for general devices
interface Device {
    brand: string;
    turnOn(): void;
}

// Derived interface for media devices
interface MediaDevice extends Device {
    mediaType: string;
    playMedia(): void;
}

// Further derived interface for advanced media devices
interface AdvancedMediaDevice extends MediaDevice {
    features: string[];
    useSmartFeatures(): void;
}

// Implementing the final interface
class SmartSpeaker implements AdvancedMediaDevice {
    brand: string;
    mediaType: string;
    features: string[];

    constructor(brand: string, mediaType: string, features: string[]) {
        this.brand = brand;
        this.mediaType = mediaType;
        this.features = features;
    }

    turnOn(): void {
        console.log(`${this.brand} speaker is now on.`);
    }

    playMedia(): void {
        console.log(`Playing ${this.mediaType} on ${this.brand} speaker.`);
    }

    useSmartFeatures(): void {
        console.log(`Using smart features like ${this.features.join(", ")} on ${this.brand} speaker.`);
    }
}

let smartSpeaker = new SmartSpeaker("Amazon Echo", "Music", ["Voice Control", "Bluetooth"]);
smartSpeaker.turnOn(); // Output: Amazon Echo speaker is now on.
smartSpeaker.playMedia(); // Output: Playing Music on Amazon Echo speaker.
smartSpeaker.useSmartFeatures(); // Output: Using smart features like Voice Control, Bluetooth on Amazon Echo speaker.
