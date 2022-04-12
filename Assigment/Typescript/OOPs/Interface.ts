// Class - Class provides type-checking for Pizza as well as create a pizza.
// Create a new instance of the class in TypeScript. It means that we can create the copy of class with new keyword.
// Classes in Types script is used to made the object for something. It is used for implementing the object.
class Pizza {
    constructor(public name: string, public toppings: string[]) {}
}

const pizzaConst = new Pizza('Inferno', ['cheese', 'peppers']);
console.log(pizzaConst);

// Interface - Interface provides type-checking for Pizza but can’t create a pizza.
// Cannot create the instance of interface with new in typescript. It means that we cannot create the copy of instance in Typescript.
// It is used for type checking purpose. Use of interface if TypeScript language is mainly focused on the checking the type of parameters in object.
interface Pizza {
    name: string;
    toppings: string[];
}


// ** Multilevel interface inheritance in class.
interface Mailable {
    send(email: string,after: number): boolean
    queue(email: string): boolean
}

interface FutureMailable extends Mailable {
    later(email: string, after: number): boolean
}

class Mail implements FutureMailable {
    later(email: string, after: number): boolean {
        console.log(`Send email to ${email} in ${after} ms.`);
        return true;
    }
    send(email: string,after: number): boolean {
        console.log(`Sent email to ${email} after ${after} ms. `);
        return true;
    }
    queue(email: string): boolean {
        console.log(`Queue an email to ${email}.`);
        return true;
    }
}
var M=new Mail();
console.log("Later: "+M.later("abc@gmail.com",3));
console.log("Send: "+M.send("abc@gmail.com",3));
console.log("Queue: "+M.queue("xyz@gmail.com"));