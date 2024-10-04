// Implementing the final interface
var SmartSpeaker = /** @class */ (function () {
    function SmartSpeaker(brand, mediaType, features) {
        this.brand = brand;
        this.mediaType = mediaType;
        this.features = features;
    }
    SmartSpeaker.prototype.turnOn = function () {
        console.log("".concat(this.brand, " speaker is now on."));
    };
    SmartSpeaker.prototype.playMedia = function () {
        console.log("Playing ".concat(this.mediaType, " on ").concat(this.brand, " speaker."));
    };
    SmartSpeaker.prototype.useSmartFeatures = function () {
        console.log("Using smart features like ".concat(this.features.join(", "), " on ").concat(this.brand, " speaker."));
    };
    return SmartSpeaker;
}());
var smartSpeaker = new SmartSpeaker("Amazon Echo", "Music", ["Voice Control", "Bluetooth"]);
smartSpeaker.turnOn(); // Output: Amazon Echo speaker is now on.
smartSpeaker.playMedia(); // Output: Playing Music on Amazon Echo speaker.
smartSpeaker.useSmartFeatures(); // Output: Using smart features like Voice Control, Bluetooth on Amazon Echo speaker.
