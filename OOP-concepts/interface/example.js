// const greets : {
//     name : string; 
//     age : number
// } = {
//     name : 'Anjali',
//     age : 21
// }
var greets = {
    name: 'Anjali',
    age: 21,
    greet: function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    }
};
greets.greet();
console.log('---------------');
var lipstick1 = {
    brand: 'maybelline',
    price: 230,
    quantity: 2,
    shade: 'nude naunce'
};
var lipstick2 = {
    brand: "mamaearth",
    price: 349,
    quantity: 1
};
var calculatePrices = function (product) {
    var brand = product.brand, price = product.price, quantity = product.quantity;
    return "Brand : ".concat(product.brand, ",  Quantity : ").concat(product.quantity, ", Total cost : ").concat(price * quantity);
};
console.log(calculatePrices(lipstick1));
console.log(calculatePrices(lipstick2));
console.log('---------------');
var add = function (x, y) {
    return x + y;
};
console.log(add(5, 9));
