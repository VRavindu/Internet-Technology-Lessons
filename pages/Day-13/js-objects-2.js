
let person = {
    name : 'Kamal',
    age : 20,

    greet: () => {
        console.log('Hii')
    }
}

person.greet();

console.log('======================')

for(let key in person) {
    console.log(key + ':' + person.key)
}