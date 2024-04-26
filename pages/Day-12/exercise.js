// function getGrade(mark){
//     if(mark>=90){
//         return 'A'
//     }else if(mark>=80){
//         return 'A-'
//     }else if(mark>=75){
//         return 'A'
//     }else if(mark>=65){
//         return 'B'
//     }else if(mark>=55){
//         return 'C'
//     }else if(mark>=35){
//         return 'S'
//     }else if(mark<35){
//         return 'F'
//     }else {
//         return 'Invalid Mark'
//     }
// }
  
//   function getStudentGrade(name,mark){
//     let grade = getGrade(mark);
//       console.log(name,":",grade);
//   }
  
//   getStudentGrade("kamal",92)
//   getStudentGrade("Nimal",73)
//   getStudentGrade("Vimukthi",78)
//   getStudentGrade("Sachindu",100)
//   getStudentGrade("Sasmith",12)
//   getStudentGrade("Dimuth",38)
//   getStudentGrade("Ashen",54)
//   getStudentGrade("Deshan",62)
//   getStudentGrade("Senesh",-10)
//   getStudentGrade("Thamindu",105)


// let studentArray = [
//     {
//         name: "Nisal",
//         mark: 70
//     },
//     {
//         name: "Sumudu",
//         mark: 91
//     },
//     {
//         name: "Yasith",
//         mark: 20
//     },
//     {
//         name: "Ashen",
//         mark: 75
//     },
//     {
//         name: "Aravinda",
//         mark: 50
//     },
//     {
//         name: "Janindu",
//         mark: 44
//     },
//     {
//         name: "Manawadu",
//         mark: 20
//     },
//     {
//         name: "Vimal",
//         mark: -10
//     }
// ];

// for (let i = 0; i < studentArray.length; i++) {
//     console.log(i + " : " + studentArray[i].name + " - " + calculateGrade(studentArray[i].mark));
// }

// function calculateGrade(marks) {
//     if (marks >= 90 && marks <= 100) {
//         return "A+";
//     } else if (marks >= 80 && marks <= 89) {
//         return "A-";
//     } else if (marks >= 75 && marks <= 79) {
//         return "A";
//     } else if (marks >= 65 && marks <= 74) {
//         return "B";
//     } else if (marks >= 55 && marks <= 64) {
//         return "C";
//     } else if (marks >= 35 && marks <= 54) {
//         return "S";
//     } else if (marks >= 0 && marks < 35) {
//         return "F";
//     } else {
//         return "Invalid!";
//     }
// }

