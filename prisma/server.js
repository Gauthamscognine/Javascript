import express from "express";
import empRoutes from "./routes/empRoutes.js";
import authRoutes from "./routes/authRoutes.js"
import "dotenv/config";

const app = express();

app.use(express.json());

// Employee routes
app.use("/auth",authRoutes);
app.use("/staff", empRoutes);


app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
// console.log(Object.keys(prisma));
