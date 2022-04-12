// Class - Class provides type-checking for Pizza as well as create a pizza.
// Create a new instance of the class in TypeScript. It means that we can create the copy of class with new keyword.
// Classes in Types script is used to made the object for something. It is used for implementing the object.
var Pizza = /** @class */ (function () {
    function Pizza(name, toppings) {
        this.name = name;
        this.toppings = toppings;
    }
    return Pizza;
}());
var pizzaConst = new Pizza('Inferno', ['cheese', 'peppers']);
console.log(pizzaConst);
var Mail = /** @class */ (function () {
    function Mail() {
    }
    Mail.prototype.later = function (email, after) {
        console.log("Send email to ".concat(email, " in ").concat(after, " ms."));
        return true;
    };
    Mail.prototype.send = function (email, after) {
        console.log("Sent email to ".concat(email, " after ").concat(after, " ms. "));
        return true;
    };
    Mail.prototype.queue = function (email) {
        console.log("Queue an email to ".concat(email, "."));
        return true;
    };
    return Mail;
}());
var M = new Mail();
console.log("Later: " + M.later("abc@gmail.com", 3));
console.log("Send: " + M.send("abc@gmail.com", 3));
console.log("Queue: " + M.queue("xyz@gmail.com"));
