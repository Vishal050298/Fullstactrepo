
function addNum(a: number, b: number): number {
    return a + b;
}


function showMes(mes: string): void {
    console.log(mes.toUpperCase());
}


 let addNum2:(x: number, y: number)=>number;


let addNum3 = function (x: number, y: number) {
    return x + y;
};


let addNum4: (a: number, b: number) => number =
    function (x: number, y: number) {
        return x + y;
};

console.log(addNum(11,22));
console.log(showMes('God is great.'));
console.log(addNum2);
console.log(addNum3(11,22));
console.log(addNum4(11,22));