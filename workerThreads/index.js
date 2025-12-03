const express = require("express");
const {Worker} = require('worker_threads');


const app = express();
const port = 7000;
app.get('/nonBlocking',(req,res)=>{
    res.status(200).send("this is non blocking ");
})
// app.get('/blocking',(req,res)=>{
//     let count = 0;
//     for(let i=0;i<20_000_000_000;i++){
//         count++;
//     }

//     res.send(`the result is ${count}`);

// });
 
app.get('/blocking',async (req,res)=>{
    const worker1 = new Worker('./worker.js');
    
    worker1.on("message",(data)=>{
         res.send(`result is ${data}`);
    });

    worker1.on("error",(error)=>{ 
        res.send(`An error occured ${error}`);
    });

});



app.listen(port,()=>{
    console.log("running on http://localhost:7000");
});
