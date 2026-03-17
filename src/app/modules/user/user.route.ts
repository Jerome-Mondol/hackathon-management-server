import { Router } from "express";
import { registerUser } from "./user.controller.js";
const router = Router();

// create user in DB
router.post('/register', registerUser);



export default router;
