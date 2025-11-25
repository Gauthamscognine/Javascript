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



const letters = ["a","b","a", "b", "a", "c", "b", "a"]
const count = letters.reduce((acc,cur)=>{
    if(acc[cur]===undefined) acc[cur] = 1;
    else acc[cur]= acc[cur]+1;
    return acc;
},{});

console.log(count);

const totalsal = salaries.reduce((acc,cur)=>{
    const total = acc+cur.salary
    return total
},0)
console.log("total salary is ", totalsal);

const comb = salaries.reduce((acc,cur)=>{
    const emp = employees.find(e=>e.id===cur.id)
    acc[emp.name] = cur.salary;
    return acc;
},{});

console.log(comb);


const high = salaries.reduce((acc,cur)=>{

    return cur.salary>acc.salary?cur:acc;
});
console.log(high);