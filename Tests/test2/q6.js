async function setTimeInt(fn,time){
    for(let i = 0;i<Number.POSITIVE_INFINITY;i++){
       await new Promise(function(resolve){
            setTimeout( function() {
                fn(i)
                resolve();
            }, time);
        })

    }
}
//time in miliseconds
setTimeInt(fn,1000);
function fn(val){
    console.log(val);
}

