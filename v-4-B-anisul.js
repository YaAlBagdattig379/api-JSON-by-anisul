// how to access json file  from "this file :v-2-A-anisul_friend_data.json"
// how to access json file  from "this file :v-2-A-anisul_friend_data.json"
const data2 = require("./v-2-A-anisul_friend_data.json");

/* methond : >>>> to access specific Object property from Json file by "using looping "for in" " */
for(x in data2){
    console.log(x)
    console.log(data2[x][1][0])
    // console.log(data2[x])
}
