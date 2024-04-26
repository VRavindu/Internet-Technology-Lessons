//Type of functions

// 1.Named Function 

function addNumber(num1,num2){
    return num1+num2
  }
  
  console.log(addNumber(10,20));
  
  console.log('==========================');

// 2.Anonymous Function

let multiplyNumbers = function(num1, num2){
    return num1*num2
}
console.log(multiplyNumbers(10,20));
console.log('=========================')

// 3.Arrow Function

//let sumNumbers = (num1, num2) => num1*num2

let sumNumbers = (num1, num2) => {
    console.log('------------')
    return num1*num2
}

console.log(20*20);
console.log('=========================')

// 4.Constructor Function

function Student(name, age, email){
    this.name = name;
    this.age = age;
    this.email = email;
}
let student1 = new Student('Kamal', 30)
console.log(student1);

// 5.Callback Function

function myFunction(Callback){
    // console.log(abc)
    if(typeof Callback === 'function'){
        Callback()
    }
}
let person = {
    name : 'Kamal',
    age : 40
}
myFunction(secondFunction)

// define and pass Array
let numberArray = [1, 2, 3, 4, 5]

function secondFunction(){
    console.log('Second Function')
}

// 6.Recursive Function

function factorial(n){
    if(n===0){
        return 1
    }
    return n * (factorial(n-1))
}
console.log(factorial(5))

// 7.BigInt 
const number1 = 4545421324534213543523132n;
const number2 = 120;

// const result = number1 + number2;
const result = number1 + BigInt(number2);
console.log('Result =' , result)