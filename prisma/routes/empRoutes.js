import express from "express";
import {
  getAllEmployees,
  // getEmployeeById,
  createEmployee,
  updateEmployee,
  patchEmployee,
  deleteEmployee,
  getEmployeeByIdcount
} from "../controllers/empController.js";

const router = express.Router();

router.get("/", getEmployeeByIdcount);
// router.get("/:id", getEmployeeByIdcount);
router.post("/", createEmployee);
router.put("/:id", updateEmployee);
router.patch("/:id", patchEmployee);
router.delete("/:id", deleteEmployee);


export default router;

