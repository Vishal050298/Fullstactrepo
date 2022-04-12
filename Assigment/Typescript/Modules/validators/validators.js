"use strict";
exports.__esModule = true;
exports.ValidatorCLS = void 0;

var ValidatorCLS = /** @class */ (function () {
    function ValidatorCLS() {
    }
    ValidatorCLS.prototype.isValidStr = function (s, regex) {
        return regex.test(s);
        
    };
    return ValidatorCLS;
}());
exports.ValidatorCLS = ValidatorCLS;
