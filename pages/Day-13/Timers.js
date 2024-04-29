// 1. setTimeout 
// setTimeout(callback, delay)

// setTimeout(function () {
//     console.log('Hello Wolrd....')
// }, 5000)

//Delay for 5s
let timeout = setTimeout(() => {
    console.log('Hello Wolrd....')
}, 5000)

// Cancel the timeout
clearTimeout(timeout) 

// 2. setInterval 
// setInterval(callback, interval)

// let interval = setInterval(()=>{
//     console.log("Hello...")
// },1000)

let greet = ()=>{
    console.log('Hiiiii')
}

setInterval(greet,1000)


// Cancel the interval
//clearInterval(interval)