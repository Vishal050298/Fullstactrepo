var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (theAge) {
            if (theAge <= 0 && theAge >= 100) {
                throw new Error('The age is invalid');
            }
            this._age = theAge;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.getAge = function () {
        return this._age;
    };
    return Person;
}());
var personObj = new Person();
personObj.age = 110;
console.log(personObj.getAge());
