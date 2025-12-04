const express = require("express");
const { EventEmitter } = require("events");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.static("public"));

const filePath = path.join(__dirname, "userDetails.txt");
const event = new EventEmitter();

// Listener 1: Name
event.on("userRegistration", (user) => {
  fs.appendFile(filePath, `Name: ${user.name}\n`, () => {});
});

// Listener 2: Email
event.on("userRegistration", (user) => {
  fs.appendFile("./userDetails.txt", `Email: ${user.email}\n`, () => {});
});

// Listener 3: Timestamp
event.on("userRegistration", () => {
  const time = new Date().toLocaleString();
  fs.appendFile(filePath, `Time: ${time}\n`, () => {});
});

// Listener 4: Separator
event.on("userRegistration", () => {
  fs.appendFile(filePath, "-------------------------\n\n", () => {});
});

// API endpoint
app.post("/register", (req, res) => {
  const user = req.body;

  event.emit("userRegistration", user);

  res.json({ message: "User registered successfully" });
});

// Start server
app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
