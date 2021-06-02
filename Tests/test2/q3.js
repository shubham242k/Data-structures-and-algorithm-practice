function f1(x,y){
    return x * y;
}

f2 = (x) => (y) => x * y;

let r1 = f1(10,20);
let r2 = f2(10)(20);

console.log(r1);
console.log(r2);