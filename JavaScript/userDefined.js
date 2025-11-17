// in java script , functions are first ibject class , that means they can be  trated like a value or an object as they want
function calculateDiscount(ori , dis = 10){ // default parameters 
    let sum = 0; // this is a rest parameter 
    return ori - (ori/100)*dis;
}

console.log(calculateDiscount(200))//this is a functional parameter 



// this is also a anonymous function are functions that are defined without a name. They are often used when you need a function for a specific task but don't necessarily need to reuse it elsewhere.
// in thsi the fucntion is assigned to a variable in  which the vairable acts as a regualr function
var greet = function(name ){
    console.log('hello this is ' + name);
}
greet('gautham ')



// You can also use arrow functions as a more concise syntax for anonymous functions: 
var greetanon  = name => console.log('hello this is'+name) ;
greetanon('gautham')

var squarenumber = x => x*x;
console.log(squarenumber(10))

//Arrow fucntion using this context 

const person  = {
    fname :"gautham",
    lname : "kedia",
    getfullname : function(){
        return this.fname +" "+  this.lname;
    }
};

console.log(person.getfullname());







function calculate(a, b, operation) { 
return operation(a, b); 
} 
function add(x, y) { 
return x + y; 
} 
function subtract(x, y) { 
return x - y; 
}


console.log(calculate(10,20,add));
console.log(calculate(20,10,subtract));// the functions can also be passed as a parameter to another fucntion and used in that particular function





