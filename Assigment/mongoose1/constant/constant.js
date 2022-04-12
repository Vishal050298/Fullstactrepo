"use strict";
exports.__esModule = true;
exports.Constants = void 0;
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.fullnameRegex = /^([a-zA-Z ]{2,40})$/;
    Constants.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    Constants.mobileRegex = /^([0-9]{10})$/;
    Constants.cityRegex = /^([a-zA-Z]{2,20})$/;
    Constants.ageRegex = /^([0-9]{2})$/;
    Constants.sallaryRegex = /^([0-9]){5,6}$/;
    return Constants;
}());
exports.Constants = Constants;