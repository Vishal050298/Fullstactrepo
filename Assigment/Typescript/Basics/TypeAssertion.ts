let empCode: any = 111;   
let employeeCode = <number> empCode;   
console.log("Type is:"+typeof(employeeCode));  


let empCode2: any = 111;   
let employeeCode2 = empCode as number;   
console.log("Type is:"+typeof(employeeCode2));


interface person {   
    name: string;   
    code: number;   
}  


let p = <person> { };   
p.code = 1; 
p.name = "Vishal"; 

