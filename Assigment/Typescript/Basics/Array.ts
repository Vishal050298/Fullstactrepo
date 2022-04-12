
// Single Dimension - Array
let cars: Array<string> = ['BMW', 'Ford', 'Honda'];  
console.log("Cars: " +cars);   
console.log("Cars[0]: " +cars[0]);   
console.log("Cars[1]: " +cars[1]);   
console.log("Cars[2]: " +cars[2]);   


// Multi Dimension - Array
var Arr:number[][] = [[1,2,3],[5,6,7]] ;  
console.log(Arr[0][0]);  
console.log(Arr[0][1]);  
console.log(Arr[0][2]);  
console.log();  
console.log(Arr[1][0]);  
console.log(Arr[1][1]);  
console.log(Arr[1][2]);  

//Array by using the Array object.  
let arrObj:string[] = new Array("Vishal","Yash","Raj");  
for(var i = 0;i<arrObj.length;i++) {   
   console.log(arrObj[i]);  
}  

//Passing arrays in function  
// let arrParse:string[] = new Array("Abhishek", "Nidhi", "Jay");   
// function showFun(arrval:string[]) {  
//    for(let i = 0;i<arrval.length;i++) {   
//       console.log(arrParse[i]);  
//    }    
// }  
// showFun(arrParse);  

// TypeScript Spread operator
// let arr1 = [ 1, 2, 3];  
// let arr2 = [ 4, 5, 6];  

// let copyArray = [...arr1];     
// console.log("Copy Array: " +copyArray);  

// let newArray = [...arr1, 7, 8];  
// console.log("New Array: " +newArray);  

// let mergedArray = [...arr1, ...arr2];  
// console.log("Merged Array: " +mergedArray);  
