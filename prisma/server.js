import express from "express";
import empRoutes from "./routes/empRoutes.js";

const app = express();

app.use(express.json());

// Employee routes
app.use("/emp", empRoutes);

app.listen(3444, () => {
  console.log("Server running on http://localhost:3444");
});
