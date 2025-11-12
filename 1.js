console.log("hello i am learning js")
let x = 6;
x = 6+x;
console.log(x);

x = 10;
console.log(x);

let  val = "chinti";
console.log(val);
if(true){
    val =val + "ff"
    console.log(val)
}
console.log(20);

var jj;
jj = "ohh yeah"
console.log(jj)
let gg;
console.log(gg);
age = 25

console.log(age)

let m = 1;
var n = 2;
console.log(m);
console.log(n);

let nn = null
nn = nn + 100;
console.log(nn + "chintu")
const hh = true;

const check  = undefined
console.log(typeof(check))
console.log(typeof(hh))
console.log(typeof(nn))
console.log(hh);

let kk = Symbol("this is gautham kedia ");
console.log(kk)


// LOOK INTO OBJECTS 
let obj = {name:" gautham" , age : 20 }
for (let i in obj){
    console.log(i+":"+obj[i])
}
delete obj.name;
for (let i in obj){
    console.log(i+":"+obj[i])
}

console.log(obj.hasOwnProperty("age"))

console.log(Object.keys(obj));    
console.log(Object.values(obj));  
console.log(Object.entries(obj)); 

// Object.freeze(obj);// doesnt allow to add , remove or even update 
// user.age = 30; //  ignored
// user.city = "NY"; //ignored

// Object.seal(obj);// doesnt allow to add or delete but allows to update the existing thing 
// obj.age = 33; //allowed because age already exists


let ar = ['chintu', 'gautham ','shahsi' , 33]
console.log(ar);

for(let  i=0;i<ar.length;i++){
    if(i==2)continue;
    console.log(ar[i])
}

let name  = prompt("Enter the name :")
console.log(typeof(name)+ name);


