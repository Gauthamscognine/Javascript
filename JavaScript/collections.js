const mySet = new Set();
mySet.add(42)
mySet.add(43)
mySet.add(41)
mySet.add(42)
console.log(mySet)
// Set(3) { 42, 43, 41 } - ouput 
mySet.delete(42);

console.log(mySet.has('grape')); 
mySet.clear();

const mySets = new Set([1, 2, 3]); 
const keyIterator = mySets.keys(); 
for (const key of keyIterator) {
     console.log(key);
 } 

console.log(mySets.size);
// ARRAYS FROM HERE 

const ar = [1,2,3];
ar.push(4);
console.log(ar)
ar.pop();
console.log(ar)
ar.unshift(0);
console.log(ar)
ar.shift();
console.log(ar)
ar.sort();
ar.splice(1,2);
console.log(ar)
ar.reverse();
console.log(ar)
console.log(ar)
//DIFFRENT FUNCTIONS SUCH AS MAP FIlter AND ALL 

ar.push(2);
ar.push(3)
ar.push(4)

const arr = ar.map(n =>{return n*2});// if u write () , then return is automatic , but if u make use of {} , then u must explicitly apply return 
console.log(arr);
