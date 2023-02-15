import express from "express";
import { getHello, createUser, loginUser } from "../controllers/authController";
import { checkToken } from "../middlewares/checkToken";

const router = express.Router();

// Public Route
router.get("/", getHello);

router.post("/auth/register", createUser);

router.post("/auth/user", loginUser);

export default router;
