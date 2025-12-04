
// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use(express.static("public"));

// const DB_URL = "http://localhost:4100/users";

// // GET all users
// app.get("/users", async (req, res) => {//get is http method and /user is the route path , req,res are the route handlers 
//   const response = await fetch(DB_URL);
//   const data = await response.json();
//   res.json(data);
// });

// // ADD user
// app.post("/users", async (req, res) => {
//   const response = await fetch(DB_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(req.body)
//   });

//   const data = await response.json();
//   res.json(data);
// });

// // UPDATE user
// app.put("/users/:id", async (req, res) => {
//   const id = req.params.id;

//   const response = await fetch(`${DB_URL}/${id}`, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(req.body)
//   });

//   const data = await response.json();
//   res.json(data);
// });

// // DELETE user
// app.delete("/users/:id", async (req, res) => {
//   const id = req.params.id;

//   await fetch(`${DB_URL}/${id}`, { method: "DELETE" });

//   res.json({ message: "User deleted" });
// });


// app.listen(3010, () => {
//   console.log("Express running at http://localhost:3010");
// });




const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static("public"));

const itemroutes = require("./router.js")

app.use("/user",itemroutes);


app.listen(3010, () => {
  console.log("Express running at http://localhost:3010");
});

