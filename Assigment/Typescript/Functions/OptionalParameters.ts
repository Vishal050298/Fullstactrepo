// To make a function parameter optional, you use the ? after the parameter name.
// c is optional here.
function sum(a: number, b: number, c?: number): number {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
}

console.log(sum(10,20,30));
console.log(sum(10,20));


// Once the Optional parameter is finalize at function declaration after that all the parameter must be optional.
// Here it throws an exception as "c" is declared after "b" and "b" is optional but "c" is not.
// function multiply(a: number, b?: number, c: number): number {
//     if (typeof c !== 'undefined') {
//         return a * b * c;
//     }
//     return a * b;
// }

