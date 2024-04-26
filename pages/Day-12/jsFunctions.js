// function addNumber(){
//     //let a;
//     if(true){
//         var a=10;
//     }
//     console.log('a :', a);
// }

// addNumber()

//=====================================================

//Converting named functions to arrow function
const addNumber = (num1,num2) => num1+num2
console.log(addNumber(10,20))

console.log("===============================")

//Converting anonymous function to arrow function
let multipleNumbers = (num1,num2)=> num1*num2


// Converting constructor function to Arrow Function
//Syntax value this is possible
//But,DON'T DO THIS
//Not supports 'this','new' when using arrow function
let Student = (name,age,email) => {
    this.name = name,
    this.age = age,
    this.email = email
}

//5.Converting callback function to arrow function
 let myFunction = (Callback)=>{

  if(typeof Callback === "function"){
    // console.log(abc)
    Callback()
  }
 
}

let secondFunction = ()=>{
  console.log("second Function");
}

myFunction(secondFunction)

console.log("===========================");