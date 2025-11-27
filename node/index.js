import fs from "fs";

const data = fs.readFileSync("test.txt", "utf-8");
console.log(data);//blovking 

fs.readFile("test.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});//non blocking 

fs.writeFile("a.txt", "Hello , this is Gautham", err => {
  if (err) throw err;
  console.log("File Created");
});//create file 

fs.appendFile("a.txt", "\n working in cognine", err => {
  if (err) throw err;
});


fs.unlink("a.txt", err => {
  if (err) throw err;
  console.log("Deleted");
});



// directories from here


fs.mkdir("myFolder", err => {
  if (err) throw err;
});

