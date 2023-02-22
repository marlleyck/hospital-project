import express from "express";
import { getHello, createUser, loginUser } from "../controllers/authController";
import { getUserById, createPatient } from "../controllers/userController";
import { checkToken } from "../middlewares/checkToken";

const router = express.Router();

// Public Routes
router.get("/", getHello);

router.post("/auth/register", createUser);

router.post("/auth/user", loginUser);

// Private Routes
router.get("/user/:id", checkToken, getUserById);

router.post("/user/patient", checkToken, createPatient);

export default router;
