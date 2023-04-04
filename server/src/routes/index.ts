import express from "express";
import { getHello, createUser, loginUser } from "../controllers/authController";
import {
  getUserById,
  createPatient,
  getPatients,
  getPatient,
} from "../controllers/userController";
import { checkToken } from "../middlewares/checkToken";

const router = express.Router();

// Public Routes
router.get("/", getHello);

router.post("/auth/register", createUser);

router.post("/auth/user", loginUser);

router.get("/patients", getPatients);

router.get("/patient/:id", getPatient);

// Private Routes
router.get("/user", checkToken, getUserById);

router.post("/user/patient", createPatient);

export default router;
