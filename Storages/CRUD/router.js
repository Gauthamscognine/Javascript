const express = require("express");
const router = express.Router();

const DB_URL = "http://localhost:4100/users";

// GET all users
router.get("/", async (req, res) => {//get is http method and /user is the route path , req,res are the route handlers 
  const response = await fetch(DB_URL);
  const data = await response.json();
  res.json(data);
});

// ADD user
router.post("/", async (req, res) => {
  const response = await fetch(DB_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req.body)
  });

  const data = await response.json();
  res.json(data);
});

// UPDATE user
router.put("/:id", async (req, res) => {
  const id = req.params.id;

  const response = await fetch(`${DB_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req.body)
  });

  const data = await response.json();
  res.json(data);
});

// DELETE user
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  await fetch(`${DB_URL}/${id}`, { method: "DELETE" });

  res.json({ message: "User deleted" });
});

module.exports = router;