// USE FOR OBJECTS
// Syntax
// for(let key in objVar){
//     //do some work
// }

let student = {
  name: "Deep Chandra Joshi",
  age: 25,
  cgpa: 7.5,
  isPass: true,
};
for (let key in student) {
  // iterator -> Characters
  console.log(key, student[key]);
}

// OUTPUT
// name Deep Chandra Joshi
// age 25
// cgpa 7.5
// isPass true
