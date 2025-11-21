
document.getElementById("getra").addEventListener("click",getradius)
function getradius(){
    const radius = document.getElementById("idradius").value;
    const ressquare = document.getElementById("r")

    const ra = Math.PI * radius*radius
     ressquare.innerHTML = `<p> ${ra}</p>`
     return;
}
// console.log(getradius(5)); // this is a regular function 


let square =  function(x){
    console.log(x*x);
}
square(5); // this is a anonymous efunction where we assign a value to a particular variable 


(function (x,y){
    console.log( x+ y);
})(3,4);// this is immediate invoke function expression , this is gets invoked directly and is called using (). 
//in this we have to wrap the function between paranthesis and then call using the '()'after the function . In this we can  have 3 types , parameterized , normal and arraow kind of thing 


function* generator(i){
    yield i;
    yield i+1;
    yield i+2;
}
const g = generator(0);
console.log(g.next());
console.log(g.next());
console.log(g.return("enough"))
console.log(g.next());
console.log(g.next().value);



//generator to build infinte number of id's , a small poc
function* getid(){
    let i  = 1;
    while(true){
        yield i++;
    }
}
const gq = getid();
function callgetid(){
    const resdiv = document.getElementById("result")
    let x = gq.next().value;
    resdiv.innerHTML = `<h1> ${x} </h1> `
}
