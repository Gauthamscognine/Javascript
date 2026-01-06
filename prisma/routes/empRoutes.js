import express from "express";
import asyncHandler from "../middlewares/asyncHandler.js";
import empErrorHandler from "../middlewares/empErrorHandler.js";

import {
  getAllEmployees,
  createEmployee,
  updateEmployee,
  patchEmployee,
  deleteEmployee,
  // getEmployeeById,
  dept_empCount
} from "../controllers/empController.js";
import { csrfProtection } from "../middlewares/csurf.js";


const router = express.Router();

router.get("/:id",dept_empCount);
router.get("/", asyncHandler(getAllEmployees));
// router.get("/",authenticate,authorizeRole([2]), getAllEmployees);
// router.get("/",getAllEmployees);
// router.get("/", csrfProtection,getAllEmployees);
// router.get("/:id", getEmployeeById);
router.post("/", asyncHandler(createEmployee));
router.put("/:id",asyncHandler( updateEmployee));
router.patch("/:id", asyncHandler(patchEmployee));
router.delete("/:id", asyncHandler(deleteEmployee));

router.use(empErrorHandler);


export default router;

