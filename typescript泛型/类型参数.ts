// interface KeyInterface {
//     [key:string]:any
// }

let getProps = <T,K extends keyof T>(obj:T, key:K):any=>{
    return obj[key];
}

let  obj4 = {
    a:"a",
    b:"b"
}

let props = getProps(obj4,"a");
console.log(props);