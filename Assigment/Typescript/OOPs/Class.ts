
class Person { 
     
    firstName:string; 
    lastName:string; 
    
    
    constructor(firstName:string,lastName:string) { 
       this.firstName = firstName;
       this.lastName = lastName;
    }  
    
    
    showPersonDetails():void { 
       console.log("Person Details: "+this.firstName+" "+this.lastName);
    } 
 } 
 
 
 var obj = new Person("Vishal","Patel");
 
 
 obj.showPersonDetails();