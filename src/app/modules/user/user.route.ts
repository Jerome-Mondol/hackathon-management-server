import { Router } from "express";
import { registerUser } from "./user.controller.js";
import { createUserSchema } from "./user.validator.js";
import validateRequest from "../../../middlewares/validator.middleware.js";
const router = Router();

// create user in DB
router.post('/register', validateRequest(createUserSchema), registerUser);



export default router;
