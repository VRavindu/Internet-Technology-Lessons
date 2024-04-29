let print = () => {
    console.log("Hello World")
}

let interval = setInterval(print, 500)


setTimeout(()=>{
    clearInterval(interval)
}, 5000)