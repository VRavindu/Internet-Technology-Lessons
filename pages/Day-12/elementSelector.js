console.log('Hey There!!')

// ID Selector
let button = document.getElementById('btn')
console.log(button)
button.style.backgroundColor = 'blue'
button.style.color = 'white'
button.style.fontWeight = 'bold'

// Class Selector
let box = document.getElementsByClassName('box')
console.log(box)

// Tag Selector 
let headline = document.getElementsByTagName('h2')
console.log(headline)

// EventListner

// button.addEventListener('click', function() {
//     console.log('Hello World')
// })

button.addEventListener('click', () => {
    console.log('Hello World')
})

