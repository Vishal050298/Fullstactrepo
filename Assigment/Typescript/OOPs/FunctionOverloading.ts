// In TypeScript, function overloadings allow you to establish the relationship between the parameter types and result types of a function.
// TypeScript function overloadings allow you to describe the relationship between parameter types and results of a function.

// ** Normal functions.
// Normal addNumbers function.
function addNumbers(a: number, b: number): number {
    return a + b;
}
// Normal addStrings function.
function addStrings(a: string, b: string): string {
    return a + b;
}




// ** Union type.
// Common function for numbers and strings by using union datatype.
// However, the union type doesn’t express the relationship between the parameter types and results accurately.
function addNumbersOrStrings(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;

    if (typeof a === 'string' && typeof b === 'string')
        return a + b;
}




// ** Function overloading.
// To better describe the relationships between the types used by a function, TypeScript supports function overloadings.
// In belowed example, we added two overloads to the add() function. The first overload tells the compiler that when the arguments are numbers, the add() function should return a number. The second overload does the same but for a string.
// Each function overload defines a combination of types supported by the add() function. It describes the mapping between the parameters and the result they return.
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
   return a + b;
}


// ** Function overloading with optional parameters
// When you overload a function, the number of required parameters must be the same. If an overload has more parameters than the other, you have to make the additional parameters optional.
function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;
function sum(a: number, b: number, c?: number): number {
    if (c) return a + b + c;
    return a + b;
}
console.log("Sum of 2 numbers: "+sum(10,20));
console.log("Sum of 3 numbers: "+sum(10,20,30));
console.log("Sum of 2 numbers from user 3rd is optional: "+sum(10,20,));

// **Method overloading inside the class.
class SumCLS {
    private current: number = 0;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
        if (target) {
            let values = [];
            for (let start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    }
}

let obj = new SumCLS();

console.log("Number: "+obj.count()); // return a number
console.log("Array of number: "+obj.count(20)); // return an array