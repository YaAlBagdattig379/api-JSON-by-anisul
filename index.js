// how to access json file 
const data = require("./v-2-B-students_data.json");
// console.log(data);




// how to access json data 

console.log(data.students[0][0].name) // no..1 xample
console.log(data.students[0][0].languages[2]); // no..2 xample
console.log(data.students[0][1].name); // no..3 xample




// how to modify json data 

data.students[0][1].name = "sabana" // no..1 xample
console.log(data.students[0][1].name); 

data.students[0][0].name = "ani vai bd" // no..2 xample
console.log(data.students[0][0].name); 

data.students[0][0].languages[2] = "urdu" // no..3 xample
console.log(data.students[0][0].languages[2]); 





// how to delete json data 