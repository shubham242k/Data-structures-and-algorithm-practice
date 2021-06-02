let obj = {
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    length: 5,
};


function f(g,obj) {
    let nobj = {
        ...obj
    }
    for (let i = 1; i < nobj.length; i++) {
        nobj[i] = nobj[i] + 1;
    }
    delete nobj["length"];
    g(nobj);
   
}

g = (obj) => {
    for (let x in obj) {
        console.log(`at index ${x} we have value ${obj[x]}`);
    }
};

f(g,obj);