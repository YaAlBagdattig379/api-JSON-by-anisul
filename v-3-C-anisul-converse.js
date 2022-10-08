// how to do the conversion between json data and javascript data. 
// how to do the conversion between json data and javascript data. 
// no..1 use for 
const shopping = {
    pen : 23,
    shirt : 230,
    isPositive : false,
    earning : 2200
}
//  no..1
// from js object >>>>>  to json file "json.stringigy(object Name)" emon hobe 
const products = JSON.stringify(shopping)
//console.log(products)
    // output >>>> {"pen":23,"shirt":230,"isPositive":false,"earning":2200}



//  no..2
// from json file >>>>> to js object "json.parse(json file)" emon hobe 
const products2 = JSON.parse(products);
console.log(products2);
// out put { pen: 23, shirt: 230, isPositive: false, earning: 2200 }


/* ******bottom line is that******* :
 NO...1 when you want to get any json data from server after sending any js file  to json and, in that cases outcome will be  like a stringfy.

 NO...2 when you want to get any js data from server after sending from js file to json and, in that cases outcome will be  like a normally object. 
 */