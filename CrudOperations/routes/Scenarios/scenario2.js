const express = require("express");
const { Worker } = require("worker_threads");

const app = express();
const PORT = 3011;

// In-memory database
const jobs = {};


app.get("/starttask", (req, res) => {

  const jobId = Date.now().toString();

  // Initial state
  jobs[jobId] = {
    status: "fetching data...",
    result: null
  };

  // Start worker
  const worker = new Worker("./worker.js", {
    workerData: { jobId }
  });

  // Receive message from worker
  worker.on("message", (message) => {
    const { jobId, result } = message;

    jobs[jobId].status = "completed";
    jobs[jobId].result = result;

    worker.terminate();
  });

  worker.on("error", (err) => {
    jobs[jobId].status = "failed";
    jobs[jobId].result = err.message;
  });

  // Immediate response
  res.json({
    message: "Fetching user posts in background...",
    jobId,
    checkStatus: `/starttask/${jobId}`
  });
});


app.get("/starttask/:jobId", (req, res) => {

  const job = jobs[req.params.jobId];

  if (!job) {
    return res.status(404).json({ message: "Invalid Job ID" });
  }

  res.json(job);
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
