var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ** By Using Super
var ParentClass = /** @class */ (function () {
    function ParentClass() {
    }
    ParentClass.prototype.display = function () {
        console.log("Display method from Parent Class!");
    };
    return ParentClass;
}());
var ChildClass = /** @class */ (function (_super) {
    __extends(ChildClass, _super);
    function ChildClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChildClass.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("dislay method from Child Class!");
    };
    ChildClass.prototype.hello = function () {
        console.log("Hello from Child Class!");
    };
    return ChildClass;
}(ParentClass));
var parentObj = new ParentClass();
parentObj.display();
var childObj = new ChildClass();
childObj.display();
childObj.hello();
// ** Without Using Super
var ParentClass2 = /** @class */ (function () {
    function ParentClass2() {
    }
    ParentClass2.prototype.display = function () {
        console.log("Display method from Parent Class!");
    };
    return ParentClass2;
}());
var ChildClass2 = /** @class */ (function (_super) {
    __extends(ChildClass2, _super);
    function ChildClass2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChildClass2.prototype.display = function () {
        //super.display() 
        console.log("dislay method from Child Class!");
    };
    ChildClass2.prototype.hello = function () {
        console.log("Hello from Child Class!");
    };
    return ChildClass2;
}(ParentClass2));
var parentObj = new ParentClass();
parentObj.display();
var childObj = new ChildClass();
childObj.display();
childObj.hello();
