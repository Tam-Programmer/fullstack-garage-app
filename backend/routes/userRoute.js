import express from "express";
import { login, register, verifyUser } from "../controller/userController.js";
const router = express.Router();

router.post("/", verifyUser, (req, res) => {
  return res.json({ Status: "Success", role: req.role, email: req.email });
});

// user route
router.post("/register", register);
router.post("/login", login);

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "Success" });
});

export default router;