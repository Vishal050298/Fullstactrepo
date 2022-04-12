import { ValidatorCLS } from './validators/validators';
import { Constants } from './constant/constant';
let email = 'vishalpatel@gmail.com';
let zipCode = '380013';
let number = '9624942354'

console.log("Valid Email Id OR Not: "+new ValidatorCLS().isValidStr(email,Constants.emailRegex));
console.log("Valid zipcode Id OR Not: "+new ValidatorCLS().isValidStr(zipCode,Constants.zipcode));
console.log("Valid number Id OR Not: "+new ValidatorCLS().isValidStr(number,Constants.number));