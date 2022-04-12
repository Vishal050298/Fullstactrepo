// A rest parameter allows you a function to accept zero or more arguments of the specified type.
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) { return total += num; });
    return total;
}
console.log("No Arguments: " + sum()); // No arguments.
console.log("2 Arguments: " + sum(10, 20)); // 2 arguments.
console.log("3 Arguments: " + sum(10, 20, 30)); // 3 arguments.
