var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.showPersonDetails = function () {
        console.log("Person Details: " + this.firstName + " " + this.lastName);
    };
    return Person;
}());
var obj = new Person("Vishal", "Patel");
obj.showPersonDetails();
