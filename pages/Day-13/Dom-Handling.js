let box = document.getElementById('box')
// console.log(box);

// 1. InnerHTML

console.log(box.innerHTML);

box.innerHTML = 'Hello World';

console.log(box.innerHTML);

// 2. TextContent

console.log(box.textContent);
box.textContent = 'Vimukthi Ravindu';
console.log(box.textContent);

// 3. InnerText

console.log(box.innerText);
box.innerText = "HELLO THERE";
console.log(box.innerText);

// 4. Appling Styles 

let image = document.getElementById('image')

image.style.width = '100px'
image.style.height = '100px'

image.setAttribute('src', '/assets/image/honey-bee.jpg')

//class list
console.log(box.classList)
box.classList.add('aaa','bbb','ccc')
console.log(box.classList)

box.classList.remove('aaa')
console.log(box.classList)

let parentDiv = document.createElement('div')
box.append(parentDiv)

let childDiv = document.createElement('div')
childDiv.setAttribute('attr', 'nav')
parentDiv.appendChild(childDiv)

parentDiv.removeChild(childDiv)
parentDiv.remove

