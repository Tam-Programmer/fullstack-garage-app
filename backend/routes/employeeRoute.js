import express from "express";
import multer from 'multer';
import path from 'path';

import { employeeLogin, employeeRegister, verifyUser, employeeList, getEmployee, 
  editEmployee,deleteEmployee,addService,serviceList } from "../controller/employeeController.js";

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
router.delete("/dashboard/delete_employee/:id",deleteEmployee);



// image upload 
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'Public/Images')
  },
  filename: (req, file, cb) => {
      cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
  }
})
const upload = multer({
  storage: storage
})
// end image upload

router.post("/dashboard/add_service",upload.single('service_icon'), addService);
router.get("/dashboard/service",serviceList);
// router.get("/dashboard/service/:id",getService);
// router.put("/dashboard/edit_service/:id",editService);
// router.delete("/dashboard/delete_service/:id",deleteService);

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "Success" });
});

export default router;