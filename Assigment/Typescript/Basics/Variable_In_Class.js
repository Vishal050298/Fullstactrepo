var global_var = 12;
var demoCLS = /** @class */ (function () {
    function demoCLS() {
        this.num = 1;
    }
    demoCLS.prototype.showNum = function () {
        var localNum = 3;
        console.log("Class function local variable: " + localNum);
    };
    demoCLS.stval = 2;
    return demoCLS;
}());
console.log("Global number: " + global_var);
console.log(demoCLS.stval);
var obj = new demoCLS();
console.log("Class variable: " + obj.num);
obj.showNum();
