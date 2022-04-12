
interface KeyValuePair<K, V> {
    key: K;
    value: V;
}
let student: KeyValuePair<string, number> = {
    key: 'Roll No',
    value: 1
};

let student2: KeyValuePair<number, boolean> = {
    key:1,
    value: true
};

console.log(student);
console.log(student2);


interface Idemo<T> {
    add(E: T): void;
    remove(E: T): void;
}

class ListCLS<T> implements Idemo<T>{
    
    Arr: T[] = [];

    add(E: T): void {
        this.Arr.push(E);
    }
    remove(E: T): void {
        let index = this.Arr.indexOf(E);
        if (index > -1) {
            this.Arr.splice(index, 1);
        }
    }
}

var obj=new ListCLS();
obj.add(10);
obj.add(20);
obj.add(30);

obj.remove(10);
obj.remove(20);


console.log(obj.Arr);

var obj2=new ListCLS();
obj2.add("Vishal");
obj2.add("Rohit");
obj2.add("Yash");

obj2.remove("Vishal");
console.log(obj2.Arr);


interface DTOptions<T> {
    [name: string]: T
}

let inBoolOptions: DTOptions<boolean> = {
    'disabled': false,
    'visible': true
};

console.log(inBoolOptions);