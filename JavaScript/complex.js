const obj = {
    name:"gautham kedia ",
    branch :"IT",
    classes :[1,2,3,4,5]
};



for(let j in obj){ // this is for in 
    console.log(j,obj[j]);
}



let arr = obj.classes;
for(let i of arr){
    console.log(i);
}



// spread operator , use to unoack the detail , get element by elemtn 

let arr1 = [1,2,3];
let arr2 = [...arr1] // if u write arr1 = arr2 , then bpth will point to the same mempry , but using spread u define a new memry pinter to it 
console.log(arr2);

let arr3 = [-1,0,...arr1,...arr2];
console.log(arr3);

console.log([...("GAUTHAM")]);

const person = {
    name:"gautham",
    class : 5
}
const clone = {...person};
console.log(clone)


const a = { x: 1, y: 2 };
const b = { y: 3, z: 4 };
const merged = { g:33 , ...a, ...b   };//if same keys then the latest one will override the earlier one 
console.log(merged);


// rest  operator , used to collect the lements , both use the same operator which  is "..." , but not in the same context 

const objj = {name:"gautham" , class :"4" , lastname :"kedia"};
const{name  ,  ...remain} = objj;
console.log(remain);


// TELUSKO FORM HERE 
//we can even make use of  symbols 
const mysym = Symbol("this is symbol")
const alien = {
    name:"gautham",
    tech:"ase",
    [mysym] : "mykey1",// only for symbol u have to make use of [].
    laptop:{
        lname:"hp",
        spec :"i5",
        ram:4
    },
    sib:[1,2,3,4,5]
}

console.log(alien?.laptop);// what ? does is , it finds the lenght only when lanmes is present 
delete alien.laptop.ram;
console.log(alien?.laptop)

console.log(alien[mysym]);
console.log(alien)


// how to change the data 
alien.name = "nikhil";
//if u want no one to change the object , then u can make use of freeze .
// Object.freeze(alien)
alien.name = "hardhik";
console.log(alien)
//we can also add fucntions inside the objects 

alien.greeting = function(){
    console.log('hello alien');
}

console.log(alien.greeting());

// if u wanna make use of the properties of the same object in the same object function , then u can make use of this keyword
alien.greetingtwo = function(){
    console.log(`hello alien ${this.name} this is gautam testting here `);
}
console.log(alien.greetingtwo());

alien.laptop.color = "black";
delete alien.laptop.color;

console.log(alien.sib);
const siblings  = alien.sib
console.log(siblings);

alien.laptop.name = 'chintu';// the nme parameter is blocked scope , when we do alien.name we get hardhik but when we do alinem.laptop.name we get chintu 

console.log(alien.greetingtwo());



students = [
 { id: 1, name: "A" },
 { id: 2, name: "B" }
]

marks = [
 { id: 1, math: 90, science: 88 },
 { id: 2, math: 85, science: 80 }
]

address = [
 { id: 1, city: "Delhi", pincode: 110001 },
 { id: 2, city: "Hyderabad", pincode: 500001 }
]

for(let )