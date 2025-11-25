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


console.log("-----------------------------------------------------------------------------")
students = [
 { id: 1, name: "A" },
 { id: 2, name: "B" }
]

marks = [
 { id: 1, math: 99, science: 99 },
 { id: 2, math: 85, science: 80 }
]

address = [
 { id: 1, city: "Delhi", pincode: 110001 },
 { id: 2, city: "Hyderabad", pincode: 500001 }
]

const marks_90 = marks.filter(m=>m.math>=90 && m.science>=90);
console.log("the students with markks gretaer than 90 are " , marks_90);




const combined = students.map(s=>{
    return{
    ...s,
    ...marks.find(m=>m.id===s.id),
    ...address.find(d=>d.id===s.id)
    }
})
console.log("combined students from various objects" , combined);

employees = [
  { id: 1, name: "Johnson" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Mike" }
];

departments = [
  { id: 1, dept: "HR" },
  { id: 2, dept: "Engineering" },
  { id: 3, dept: "Finance" }
];

salaries = [
  { id: 1, salary: 50000 },
  { id: 2, salary: 70000 },
  { id: 3, salary: 65000 }
];

const ename = employees.map(m=>m.name);
console.log("name of emp are using map ",ename);




const sal_6500 = employees.filter(e=> salaries.find(s=>s.id===e.id && s.salary>=65000)).map(e=>e.name);
console.log("salaries above 65 using map and filter ",sal_6500);



const mergeED = employees.map(e=>{
    return{
        ...e,
        
        ...departments.find(d=>d.id ===e.id)
    }
    
})
console.log("merging of emp and dep ",mergeED);





const enamelength = employees.filter(e=>e.name.length>4);
console.log(enamelength,"length grater than 2")




const combemp = employees.map(e =>{
    return {
        ...e.id,
        ...departments.find(d=>d.id===e.id),
        ...salaries.find(s=>s.id===e.id)
    }
});
console.log("combemp from various emp",combemp);





const odd = [1,2,3,4,5,6,7,8,9];
const onlyeven = odd.filter(i =>i%2==0);
console.log("onlyeven from 1 to 10 numbers usinf filter " , onlyeven);


const letters = ["a","b","a", "b", "a", "c", "b", "a"]
const count = letters.reduce((acc,cur)=>{
    if(acc[cur]===undefined) acc[cur] = 1;
    else acc[cur]= acc[cur]+1;
    return acc;
},{});

console.log(count);

const totalsal = salaries.reduce((acc,cur)=>{
    const total = acc+cur.salary
},0)
c























const engdept = employees.find(e=>{
    const dep = departments.find(d=>d.id===e.id)
    return dep && dep.dept==="Engineering";
});
console.log("emp who have dept engineering",engdept);

const sal65 = employees.filter(e=>
    salaries.some(s=>s.id===e.id && s.salary>65000)).map(e=>e.name);
console.log("sal greater than 65 and only name ",sal65);

const ed= employees.map(e=>{
    return{
        ...e,
        ...departments.find(d=>d.id===e.id),
        ...salaries.find(s=>s.id===e.id)
    }
    
}) 
console.log(ed);

const maxsal= Math.max(...salaries.map(s=>s.salary)); 
const high = employees.map(e=>{
    return{
        ...e,
        ...salaries.find(s1=>s1.id===e.id && s1.salary===maxsal),
        ...departments.find(d=>d.id===e.id)
    }
}).filter(obj=>obj.salary);

console.log("highest pay",high);










