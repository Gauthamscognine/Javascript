import fs from "fs/promises";

const data = await fs.readFile("test.txt","utf-8");
console.log(data);

// import fs from "fs";
// fs.readFile("test.txt", "utf-8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });   this is when u wanna implement using callback functions , as there e are importing promises there , we cn directly make use of await 

await fs.writeFile("chintu.txt", "Hello chintu");
await fs.writeFile("test.txt", "Hello , i am checking writefile operation here ");// this will create a file and also overide all the contents in that particular file 

await fs.appendFile("test.txt", "\n here i am checking the operation appendfile");

 fs.unlink("chintu.txt");

 await fs.rename("test.txt", "newtest.txt");


