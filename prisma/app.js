import express from "express";
import empRoutes from "./routes/empRoutes.js";
import authRoutes from "./routes/authRoutes.js"
import cookieParser from "cookie-parser";
import csurf from "csurf";
import "dotenv/config";
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/auth",authRoutes);
app.use("/staff", empRoutes);


// // optional health check
// app.get("/health", (req, res) => {
//   res.json({ status: "ok" });
// });

export default app;
