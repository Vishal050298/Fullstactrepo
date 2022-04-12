class Shape { 
    Area:number 
    constructor(a:number) { 
       this.Area = a;
    } 
 } 
 
 class Circle extends Shape { 
    showArea():void { 
       console.log("Area of the circle:  "+this.Area);
    } 
 }
 var circleObj = new Circle(20);
 circleObj.showArea();

 class GrandParentCLS { 
    mes:string; 
 } 
 
 class ParentCLS extends GrandParentCLS {} 
 class ChildCLS extends ParentCLS {}  
 
 var obj = new ChildCLS(); 
 obj.mes ="Hello Guys" 
 console.log(obj.mes);


class StaticCLS {  
    static num:number; 
    
    static disp():void { 
       console.log("The value of num is"+ StaticCLS.num) 
    } 
 } 
 
 StaticCLS.num = 12     
 StaticCLS.disp()      


 class Person{ } 
var Pobj = new Person() 
var isPerson = Pobj instanceof Person; 
console.log("Pobj is an instance of Person: " + isPerson);


class PersonDHCLS { 
    str:string = "Hello";
    private str2:string = "Guys";

 }
  
 var PDHobj = new PersonDHCLS();
 console.log(PDHobj.str)     


 
 interface ILoan { 
    interest:number 
 } 
 
 class PersonalLoan implements ILoan { 
    interest:number; 
    rebate:number; 
    
    constructor(interest:number,rebate:number) { 
       this.interest = interest 
       this.rebate = rebate 
    } 
 } 
 
 var PLobj = new PersonalLoan(10,1) 
 console.log("Interest is : "+PLobj.interest+" Rebate is : "+PLobj.rebate);
