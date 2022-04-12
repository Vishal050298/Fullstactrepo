// In TypeScript, function overloadings allow you to establish the relationship between the parameter types and result types of a function.
// TypeScript function overloadings allow you to describe the relationship between parameter types and results of a function.
// ** Normal functions.
// Normal addNumbers function.
function addNumbers(a, b) {
    return a + b;
}
// Normal addStrings function.
function addStrings(a, b) {
    return a + b;
}
// ** Union type.
// Common function for numbers and strings by using union datatype.
// However, the union type doesn’t express the relationship between the parameter types and results accurately.
function addNumbersOrStrings(a, b) {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;
    if (typeof a === 'string' && typeof b === 'string')
        return a + b;
}
function add(a, b) {
    return a + b;
}
function sum(a, b, c) {
    if (c)
        return a + b + c;
    return a + b;
}
console.log("Sum of 2 numbers: " + sum(10, 20));
console.log("Sum of 3 numbers: " + sum(10, 20, 30));
console.log("Sum of 2 numbers from user 3rd is optional: " + sum(10, 20));
// **Method overloading inside the class.
var SumCLS = /** @class */ (function () {
    function SumCLS() {
        this.current = 0;
    }
    SumCLS.prototype.count = function (target) {
        if (target) {
            var values = [];
            for (var start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    };
    return SumCLS;
}());
var obj = new SumCLS();
console.log("Number: " + obj.count()); // return a number
console.log("Array of number: " + obj.count(20)); // return an array
