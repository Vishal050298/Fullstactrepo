var global_var = 12          

class demoCLS { 
   num = 1;             
   static stval = 2;     
   
   showNum():void { 
      var localNum = 3;     
      console.log("Class function local variable: "+localNum);
   } 
} 

console.log("Global number: "+global_var);  

console.log(demoCLS.stval)   

var obj = new demoCLS();
console.log("Class variable: "+obj.num);


obj.showNum();