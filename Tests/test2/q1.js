let arr = [1,2,3,4];

function f(arr){
    let narr = [...arr];
    for(x in narr){
        narr[x] = 0
    }
    return narr
}

console.log(arr);
console.log(f(arr));
console.log(arr);