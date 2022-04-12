var StCLS = /** @class */ (function () {
    function StCLS(size) {
        this.size = size;
        this.elements = [];
    }
    StCLS.prototype.isEmpty = function () {
        return this.elements.length === 0;
    };
    StCLS.prototype.isFull = function () {
        return this.elements.length === this.size;
    };
    StCLS.prototype.push = function (element) {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);
    };
    StCLS.prototype.pop = function () {
        if (this.elements.length == 0) {
            throw new Error('The stack is empty!');
        }
        return this.elements.pop();
    };
    return StCLS;
}());
// **StCLS with num.
var num = new StCLS(5);
function randBetween(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
while (!num.isFull()) {
    var n = randBetween(1, 10);
    console.log("Push ".concat(n, " into the stack."));
    num.push(n);
}
while (!num.isEmpty()) {
    var n = num.pop();
    console.log("Pop ".concat(n, " from the stack."));
}
//** StCLS wth string */
var words = 'The quick brown fox jumps over the lazy dog'.split(' ');
var wordStack = new StCLS(words.length);
// push words into the stack
words.forEach(function (word) { return wordStack.push(word); });
// pop words from the stack
while (!wordStack.isEmpty()) {
    console.log(wordStack.pop());
}
