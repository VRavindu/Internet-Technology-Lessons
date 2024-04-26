let student = {};
console.log("Student : ", student);
console.log("Type of student : " + typeof student);

// Defigning Object
student = {
  firstName: "Kamal",
  lastName: "Perera",
  email: "kamalperera@gmail.com",
  phoneNumber: "0774523452",
  age: 25,
  isRegistered: true,
};

console.log("Student : ", student);
console.log("Student Email (using dot notation) : ", student.email);
console.log(
  "Student Email (using squar brackets notation) : ",
  student["email"]
);

// Assigning Values using dot notation
student.age = 20;
console.log("Student Age : ", student.age);
console.log("Student : ", student);

// Assigning Values using Square Brackets notation
student.age = 28;
console.log("Student Age : ", student.age);
console.log("Student : ", student);
