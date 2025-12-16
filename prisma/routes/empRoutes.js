import express from "express";
import jwt from "jsonwebtoken";

import {
  getAllEmployees,
  createEmployee,
  updateEmployee,
  patchEmployee,
  deleteEmployee,
  // getEmployeeById,
  dept_empCount
} from "../controllers/empController.js";
const router = express.Router();





const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token missing" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // userId, email available here
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};







router.get("/:id",dept_empCount);
router.get("/",authenticate, getAllEmployees);
// router.get("/:id", getEmployeeById);
router.post("/", createEmployee);
router.put("/:id", updateEmployee);
router.patch("/:id", patchEmployee);
router.delete("/:id", deleteEmployee);



export default router;

