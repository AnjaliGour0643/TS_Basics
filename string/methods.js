var text = "TypeScript is awesome!";
console.log("Original String:", text);
// 1. charAt() - Returns the character at a specified index
var charAt3 = text.charAt(3);
console.log("Character at index 3:", charAt3);
// 2. concat() - Combines two or more strings
var additionalText = " Let's learn it.";
var combinedText = text.concat(additionalText);
console.log("After concat:", combinedText);
// 3. includes() - Checks if a string contains a specified value
// let containsTypeScript = text.includes("TypeScript");
// console.log("Includes 'TypeScript':", containsTypeScript);
// 4. indexOf() - Returns the index of the first occurrence of a specified value
var indexOfIs = text.indexOf("is");
console.log("Index of 'is':", indexOfIs);
// 5. replace() - Replaces a specified value with another value
var replacedText = text.replace("awesome", "great");
console.log("After replace 'awesome' with 'great':", replacedText);
// 6. split() - Splits a string into an array of substrings
var words = text.split(" ");
console.log("After split by spaces:", words);
// 7. substring() - Extracts characters from a string, between two specified indices
var substringText = text.substring(0, 10);
console.log("Substring from index 0 to 10:", substringText);
// 8. slice() - Extracts a section of a string
var slicedText = text.slice(4, 13);
console.log("Slice from index 4 to 13:", slicedText);
// 9. toUpperCase() and toLowerCase() - Converts the string to uppercase or lowercase
var upperCaseText = text.toUpperCase();
var lowerCaseText = text.toLowerCase();
console.log("To Upper Case:", upperCaseText);
console.log("To Lower Case:", lowerCaseText);
// 10. trim() - Removes whitespace from both ends of the string
var paddedText = "   Hello, World!   ";
var trimmedText = paddedText.trim();
console.log("After trim:", trimmedText);
// 11. startsWith() - Checks if the string starts with a specified value
// let startsWithTS = text.startsWith("TypeScript");
// console.log("Starts with 'TypeScript':", startsWithTS);
// 12. endsWith() - Checks if the string ends with a specified value
// let endsWithAwesome = text.endsWith("awesome!");
// console.log("Ends with 'awesome!':", endsWithAwesome);
// 13. repeat() - Returns a new string with a specified number of copies of an original string
// let repeatedText = text.repeat(2);
// console.log("Repeated text:", repeatedText);
// 14. length - Returns the length of the string
var lengthOfText = text.length;
console.log("Length of text:", lengthOfText);
// 15. charCodeAt() - Returns the Unicode of the character at a specified index
var charCodeAt3 = text.charCodeAt(3);
console.log("Unicode of character at index 3:", charCodeAt3);
// 16. search() - Searches for a match between a regular expression and the string
var indexOfRegexMatch = text.search(/awesome/i);
console.log("Index of 'awesome' (using search):", indexOfRegexMatch);
