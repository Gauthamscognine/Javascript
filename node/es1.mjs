import {calDis} from "./es.mjs";
import path from "path";



console.log(calDis(100,90));
const full  = path.join("node","newfoler","newfile")
console.log(full);
const check = '\JAVASCRIPT\\node\\newtest.txt';// so here if u keep only one backslash ,then it will consider \n and only print ode and extest.txt . to avoid this we have to add double backslask 
console.log(path.basename(check));
console.log(path.parse(check));

const filePath = path.join("JAVASCRIPT", "node", "newtest.txt");
fs.readFile(filePath);
const data = await fs.readFile("test.txt","utf-8");

