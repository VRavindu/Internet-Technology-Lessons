// Click Event

document.getElementById('btnAdd').addEventListener('click', function(){
    console.log("Hello World");
    alert("Hello")
})

let box = document.getElementById('box')

// Mouse Over
document.getElementById('box').addEventListener('mouseover', ()=>{
    console.log("Mouse Hover");
    box.style.backgroundColor = 'green'
    box.style.width = '400px'
    box.style.borderRadius = '100px'
})

// Mouse Out
document.getElementById('box').addEventListener('mouseout', function(){
    console.log("Mouse Out");
    box.style.backgroundColor = 'red'
    box.style.width = '200px'
    box.style.borderRadius = '0'
})

// KeyDown
document.getElementById('text').addEventListener('keydown', ()=>{
    console.log('KeyDown..');
})

// KeyUp
document.getElementById('text').addEventListener('keyup', ()=>{
    console.log('KeyUp..');
})

// KeyDown Event
document.getElementById('text').addEventListener('keydown', (event)=>{
    console.log('Key : ' + event.key); // Key

    console.log('KeyCode : ' + event.keyCode); //KeyCode
})

// Submit Event

document.getElementById('submit').addEventListener('keydown', (event)=>{
    console.log('Submit'); // Key

})