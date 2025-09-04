import express from "express";
import { authenticate, authorizeAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Example admin-only route
router.get("/dashboard", authenticate, authorizeAdmin, (req, res) => {
  res.json({ message: "Welcome to the Admin Dashboard", user: req.user });
});

export default router;
