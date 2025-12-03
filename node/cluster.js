const cluster = require("cluster");
const express = require("express");
const os = require("os");

const noOfCores = os.cpus().length
// console.log(noOfCores);

if(cluster.isPrimary){
    for(let i=0;i<noOfCores;i++){
        cluster.fork();
    }
}
else{
    const app = express();
    app.get('/',(req,res)=>{
        res.send(`this is home page and the process id is ${process.pid}`);
    })
    app.listen(8000,()=>{
        console.log("http://localhost:8000");
    })
} 

