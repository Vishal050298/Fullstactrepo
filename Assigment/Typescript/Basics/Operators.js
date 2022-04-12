// Arithmatic
// Sum
var a = 20;
var b = 30;
var c = a + b;
console.log("Sum: " + c);
// Sub
var a1 = 30;
var b1 = 20;
var c1 = a1 - b1;
console.log("Sub: " + c1);
// Mul
var a2 = 30;
var b2 = 20;
var c2 = a2 * b2;
console.log("Mul: " + c2);
// Div
var a3 = 30;
var b3 = 10;
var c3 = a2 / b2;
console.log("Div: " + c1);
// Comparison (Relational) Operators
// ==
var a4 = 10;
var b4 = 20;
console.log(a4 == b4); //false
console.log(a4 == 10); //true
// ===
var a5 = 10;
var b5 = 20;
console.log(a5 === b5); //false
console.log(a5 === 10); //true
// !=
var a6 = 10;
var b6 = 20;
console.log(a6 != b6); //true
console.log(a6 != 10); //false
// !==
var a7 = 10;
var b7 = 20;
console.log(a7 !== b7); //true
console.log(a7 !== 10); //false
// >
var a8 = 30;
var b8 = 20;
console.log(a8 > b8); //true
console.log(a8 > 30); //false
// <
var a9 = 30;
var b9 = 20;
console.log(a9 < b9); //true
console.log(a9 < 30); //false
// >=
var a10 = 30;
var b10 = 20;
console.log(a10 >= b8); //true
console.log(a8 >= 30); //false
// <=
var a11 = 30;
var b11 = 20;
console.log(a11 > b11); //true
console.log(a11 > 30); //false
// &&
var a12 = false;
var b12 = true;
console.log(a12 && b12); //false
console.log(b12 && true); //true
console.log(b12 && 10); //10 which is also 'true'
console.log(a12 && '10'); //false
// ||
var a13 = false;
var b13 = true;
console.log(a13 || b13); //true
console.log(b13 || true); //true
console.log(b13 || 10); //true
console.log(a13 || '10'); //'10' which is
// !
var a14 = 20;
var b14 = 30;
console.log(!true); //false
console.log(!false); //true
console.log(!a14); //false
console.log(!b14); //false
console.log(!null); //true
//Assignment Operator
//=
var a15 = 10;
var b15 = 5;
console.log("a: " + a15);
console.log("b: " + b15);
//+=
var a16 = 10;
var b16 = 5;
var c16 = a16 += b16;
console.log("Ans: " + c16);
// -=
var a17 = 10;
var b17 = 5;
var c17 = a17 -= b15;
console.log("Ans: " + c17);
// *=
var a18 = 10;
var b18 = 5;
var c18 = a18 *= b18;
console.log("Ans: " + c18);
// /=
var a19 = 10;
var b19 = 5;
var c19 = a19 /= b19;
console.log("Ans: " + c19);
// %=
var a20 = 16;
var b20 = 5;
var c20 = a20 %= b20;
console.log("Ans: " + c20);
// Concatenation Operator
var flnm = "Vishal" + " Patel";
console.log("Fullname: " + flnm);
// Conditional Operator
var num = 16;
var result = (num > 0) ? "True" : "False";
console.log(result);
// in
var Cars = { brand: 'BMS', model: 'X4', year: 2022 };
console.log('make' in Cars);
// delete
var Cars2 = { Company1: 'BMW',
    Company2: 'Ford',
    Company3: 'Honda'
};
delete Cars2.Company1;
console.log(Cars2);
// typeof
var mes = "Hello " + "Guys..!!";
console.log(typeof mes);
// Instanceof
var arr = [1, 2, 3];
console.log("arr is an Array:");
console.log(arr instanceof Array); // true
console.log("arr is a String:");
console.log(arr instanceof String); // false
