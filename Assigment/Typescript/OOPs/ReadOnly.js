var Person = /** @class */ (function () {
    function Person(birthDate) {
        this.birthDate = birthDate;
    }
    return Person;
}());
var person = new Person(new Date(1990, 12, 25));
console.log("Person Date: " + person.birthDate);
// person.birthDate = new Date(1991, 12, 25); // Compile error
