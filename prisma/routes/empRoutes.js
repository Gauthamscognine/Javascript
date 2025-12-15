import express from "express";
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

router.get("/:id",dept_empCount);
router.get("/", getAllEmployees);
// router.get("/:id", getEmployeeById);
router.post("/", createEmployee);
router.put("/:id", updateEmployee);
router.patch("/:id", patchEmployee);
router.delete("/:id", deleteEmployee);


export default router;

