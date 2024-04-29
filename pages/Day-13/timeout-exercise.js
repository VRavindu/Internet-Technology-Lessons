let count = 1;

let print = ()=>{
    console.log(count);
    count++
    
    if(count>10){
        clearInterval(interval)
    }
}


let interval = setInterval(print, 2000)