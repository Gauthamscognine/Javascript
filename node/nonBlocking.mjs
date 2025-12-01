import fs from "fs/promises";
import path  from "path";
// import fs from "fs";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const filePath = path.join(__dirname,  "newtest.txt");
console.log(__dirname);
console.log(filePath);
const data = await fs.readFile(filePath,"utf-8");
console.log(data);

import fs from "fs";
fs.readFile("test.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
});   //this is when u wanna implement using callback functions , as there we are importing promises there , we cn directly make use of await 

await fs.writeFile("testing.txt", "Hello testing file");
await fs.writeFile("newtest.txt", "Hello , i am checking writefile operation here ");// this will create a file and also overide all the contents in that particular file 
await fs.appendFile("newtest.txt", "\n here i am checking the operation appendfile");
// fs.unlink("testing.txt");
//  await fs.rename("test.txt", "newtest.txt");

//  const filePath = path.join(__dirname,  "newtest.txt");
 const datas= await fs.readFile(filePath);// Those are your text characters encoded in hexadecimal bytes.
console.log(datas);
console.log(path.basename(filePath) +"this is basename thing");  
console.log(path.extname(filePath)+"this is extname");
console.log(path.parse(filePath)+"this is parse operation");


