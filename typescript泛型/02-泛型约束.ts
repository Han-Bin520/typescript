interface LeghtInterface {
    length:number
}

let getArray1 = <T extends LeghtInterface>(value:T, item:number = 5):T[] =>{
    return new Array(item).fill(value);
};

let tArr = getArray1<string>("abc");
let rHes = tArr.map(item=>item.length);
console.log(rHes);
