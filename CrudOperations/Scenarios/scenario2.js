const express = require('express');
const app = express();

const job={};

app.get('/starttask',(req,res)=>{
    const jobId = Date.now();

    job[jobId] = {
        status:"pending",
        result :null
    }

    res.json({
        message:"your request is being processed in the backend",
        jobid:jobId,
        nextStep:"check your status at /starttask/:jobId "
        
    })

    processJob(jobId);
});

function processJob(jobId){
    console.log("processing jobId now ")

    setTimeout(()=>{
        job[jobId].status = "completed",
        job[jobId].result ="your background job is completed succesfully"
    },20000);
}

app.get('/starttask/:jobId',(req,res)=>{
    const jobs = job[req.params.jobId];
    if(!jobs){
        res.status(500).json({message:"Invalid job id: "})
    };
    res.json(jobs);
});

app.listen(3010,()=>{
    console.log("server is listening on http://localhost:3010");
});