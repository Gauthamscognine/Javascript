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