/* how to access json file  from "this file : v-2-B-students_data.json" 
this is totally json data....are taken from that file.
*/
const data = require("./v-2-B-students_data.json");


// how to access/get json specifit  desired data --no.1 

// console.log(data.students[0][0].name) // no..1 xample
// console.log(data.students[0][0].languages[2]); // no..2 xample
// console.log(data.students[0][1].name); // no..3 xample



// how to modify json data 

data.students[0][1].name = "sabana" // no..1 xample
// console.log(data.students[0][1].name); 

data.students[0][0].name = "ani vai bd" // no..2 xample
// console.log(data.students[0][0].name); 

data.students[0][0].languages[2] = "urdu" // no..3 xample
// console.log(data.students[0][0].languages[2]); 



// how to delete json data 

delete data.students[0][1].languages;//mandatory  

// console.log(data.students[0][1].cgpa) //egp : 1
// console.log(data.students[0][1].cgpa) //egp : 2




// how to access/get json specifit  desired data --no.2 by website 

// short cut "from jsonPathFinder website" example
// console.log(data.students[0][1].name)



// to access/get json specifit  desired data --no.3 by loop"for in" 

// for( x in data){
//     console.log(x);
//     // console.log(data(x));
// }

