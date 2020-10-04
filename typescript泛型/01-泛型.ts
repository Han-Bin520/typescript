let getArray = (value:number, item:number = 5):number[] =>{
    return new Array(item).fill(value);
};

let arr = getArray(6,3);
console.log(arr);

