//可选参数
function AddFun(a:number, b:number, c?:number):number {
    return a + b + (c ? c : 0);
}
let obj = AddFun(10,20);
console.log(obj);

//默认参数
function modern(x:number, y:number = 10):number {
    return x + y;
}
let let4 = modern(10);

console.log(let4);

//剩余参数
function can(x:number, ...ags:number[]) {
    console.log(x);
    console.log(ags);
}
can(10,20,30,40,50)