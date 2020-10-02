type Add = (a:number, b:number)=>number;
let add:Add = function (x:number, y:number):number {
    return x + y;
};
let res = add(30,20);
console.log(res);

//函数重载
function get(x:number):number[];
function get(str:string):string[];

function get(value:any):any[]{
    if(typeof value === "string"){
        return value.split("");
    }else{
        let arr = [];
        for(let i = 0;i<=value;i++){
            arr.push(i);
        }
        return arr;
    }
}
let res1 = get(10);
console.log(res);