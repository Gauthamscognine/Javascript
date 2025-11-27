// const fs = require("fs");

// console.log("Start");

// const data = fs.readFileSync("file.txt", "utf-8");  // BLOCKING

// console.log(data);

// console.log("End");
// const fs = require("fs");

// console.log("Start");

// fs.readFile("file.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// console.log("End");

import fs from "fs";    

const data = fs.readFileSync("file.txt", "utf-8");
console.log(data);