import express from "express";
import { employeeLogin, employeeRegister, verifyUser, employeeList, getEmployee, editEmployee } from "../controller/employeeController.js";

const router = express.Router();

router.post("/employee", verifyUser, (req, res) => {
  return res.json({ Status: "Success", role: req.role, email: req.email });
});

// employee route
router.post("/dashboard/add_employee", employeeRegister);
router.post("/dashboard/login", employeeLogin);
router.get("/dashboard/employee",employeeList);
router.get("/dashboard/employee/:id",getEmployee);
router.put("/dashboard/edit_employee/:id",editEmployee);

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "Success" });
});

export default router;