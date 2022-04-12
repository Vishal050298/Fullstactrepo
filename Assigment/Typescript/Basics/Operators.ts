// Arithmatic
// Sum
let a = 20;
let b = 30;
let c = a + b;
console.log("Sum: "+c);

// Sub
let a1 = 30;
let b1 = 20;
let c1 = a1 - b1;
console.log("Sub: "+c1);

// Mul
let a2 = 30;
let b2 = 20;
let c2 = a2 * b2;
console.log("Mul: "+c2);

// Div
let a3 = 30;
let b3 = 10;
let c3 = a2 / b2;
console.log("Div: "+c1);

// Comparison (Relational) Operators
// ==
let a4 = 10;
let b4 = 20;
console.log(a4==b4);     //false
console.log(a4==10);    //true

// ===
let a5 = 10;
let b5 = 20;
console.log(a5===b5);    //false
console.log(a5===10);   //true

// !=
let a6 = 10;
let b6 = 20;
console.log(a6!=b6);     //true
console.log(a6!=10);    //false

// !==
let a7 = 10;
let b7 = 20;
console.log(a7!==b7);     //true
console.log(a7!==10);    //false


// >
let a8 = 30;
let b8 = 20;
console.log(a8>b8);     //true
console.log(a8>30);    //false

// <
let a9 = 30;
let b9 = 20;
console.log(a9<b9);     //true
console.log(a9<30);    //false

// >=
let a10 = 30;
let b10 = 20;
console.log(a10>=b8);     //true
console.log(a8>=30);    //false

// <=
let a11 = 30;
let b11 = 20;
console.log(a11>b11);     //true
console.log(a11>30);    //false

// &&
let a12 = false;
let b12 = true;
console.log(a12&&b12);     //false
console.log(b12&&true);   //true
console.log(b12&&10);     //10 which is also 'true'
console.log(a12&&'10');  //false

// ||
let a13 = false;
let b13 = true;
console.log(a13||b13);      //true
console.log(b13||true);   //true
console.log(b13||10);     //true
console.log(a13||'10');   //'10' which is


// !
let a14 = 20;
let b14 = 30;
console.log(!true);    //false
console.log(!false);   //true
console.log(!a14);       //false
console.log(!b14);       //false
console.log(!null);    //true

//Assignment Operator

//=
let a15 = 10;
let b15 = 5;
console.log("a: " +a15);
console.log("b: " +b15);

//+=
let a16 = 10;
let b16 = 5;
let c16 = a16 += b16;
console.log("Ans: "+c16);

// -=
let a17 = 10;
let b17 = 5;
let c17 = a17 -= b15;
console.log("Ans: "+c17);

// *=
let a18 = 10;
let b18 = 5;
let c18 = a18 *= b18;
console.log("Ans: "+c18);

// /=
let a19 = 10;
let b19 = 5;
let c19 = a19 /= b19;
console.log("Ans: "+c19);

// %=
let a20 = 16;
let b20 = 5;
let c20 = a20 %= b20;
console.log("Ans: "+c20); 

// Concatenation Operator
let flnm = "Vishal" + " Patel";  
console.log("Fullname: " +flnm);  

// Conditional Operator
let num = 16;  
let result = (num > 0) ? "True":"False"   
console.log(result);  


// in
let Cars = {brand: 'BMS', model: 'X4', year: 2022};
console.log('make' in Cars);

// delete
let Cars2 = { Company1: 'BMW',
             Company2: 'Ford',
             Company3: 'Honda'
           };
delete Cars2.Company1;
console.log(Cars2);   

// typeof
let mes = "Hello " + "Guys..!!";
console.log(typeof mes);

// Instanceof
let arr = [1, 2, 3];
console.log("arr is an Array:");
console.log(arr instanceof Array); // true

console.log("arr is a String:");
console.log(arr instanceof String); // false



