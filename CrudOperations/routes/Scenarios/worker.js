const { workerData, parentPort } = require("worker_threads");

async function fetchPosts() {

  // Fetch some posts from JSONPlaceholder
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  // Only send 5 posts to keep response small
  return data.slice(0, 5);
}

(async () => {
  try {
    const posts = await fetchPosts();

    parentPort.postMessage({
      jobId: workerData.jobId,
      result: posts
    });

  } catch (error) {
    parentPort.postMessage({
      jobId: workerData.jobId,
      result: "Error: " + error.message
    });
  }
})();
