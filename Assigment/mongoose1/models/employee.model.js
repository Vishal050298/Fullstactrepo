"use strict";

exports.__esModule = true;

const mongoose = require('mongoose');

const { Constants } = require('../constant/constant');

var employeeSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: 'This field is required.'
    },
    email: {
        type: String,
        required: 'This field is required.'
    },
    mobile: {
        type: String,
        required: 'This field is required.'
    },
    city: {
        type: String,
        required: 'This field is required.'
    },
    age: {
        type: Number,
        required: 'This field is required.'
    },
    sallary: {
        type: Number,
        required: 'This field is required.'
    }
});

employeeSchema.path('email').validate((val) => {
    return Constants.emailRegex.test(val);
}, 'Invalid e-mail.');

employeeSchema.path('fullname').validate((val) => {
    return Constants.fullnameRegex.test(val);
}, 'Invalid fullname.');

employeeSchema.path('mobile').validate((val) => {
    return Constants.mobileRegex.test(val);
}, 'Invalid mobile.');

employeeSchema.path('city').validate((val) => {
    return Constants.cityRegex.test(val);
}, 'Invalid city.');

employeeSchema.path('age').validate((val) => {
    return Constants.ageRegex.test(val);
}, 'Invalid age.');

employeeSchema.path('sallary').validate((val) => {
    return Constants.sallaryRegex.test(val);
}, 'Invalid sallary.');

mongoose.model('Employee', employeeSchema);