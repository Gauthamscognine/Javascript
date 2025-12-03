const fs = require('fs');

const stream = fs.createReadStream("a.txt",{
    highWaterMark:3// watermark is the thing to read or write in bytes , by default for read stream it is 64kb and writestream it is 16kb
//     start: 10,
//   end: 20,
//   encoding: "utf8",
// If you start in the middle of 😊, output will be corrupted.
});

stream.on("data",chunks=>{
    console.log(chunks.toString())
});// we have end , error stream.on("error", err => console.log(err.message));

stream.on('end', () => {
  console.log("Finished reading file.");
});

const writestream = fs.createWriteStream("pipstream.txt");

stream.pipe(writestream);

writestream.on("finish",()=>{
    console.log("done copying content from one fie to another using pipe ")
})//we have error ,close and pipe 