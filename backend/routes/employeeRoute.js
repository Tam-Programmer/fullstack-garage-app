import express from "express";
import { employeeLogin, employeeRegister, verifyUser } from "../controller/employeeController.js";
const router = express.Router();

router.post("/employee", verifyUser, (req, res) => {
  return res.json({ Status: "Success", role: req.role, email: req.email });
});

// employee route
router.post("/dashboard/add_employee", employeeRegister);
router.post("/dashboard/login", employeeLogin);


router.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "Success" });
});

export default router;