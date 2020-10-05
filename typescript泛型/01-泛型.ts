let getArray = <T>(value:T, item:number = 5):T[] =>{
    return new Array(item).fill(value);
};

let arr = getArray<string>("abc");
let resH = arr.map(item=>item.length);
console.log(resH);

