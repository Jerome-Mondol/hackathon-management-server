import { Router } from "express";
import multer from 'multer';
import { registerUser } from "../controllers/auth.controller.js";
const router = Router();
const upload = multer();
// create user in DB
router.post('/register', upload.none(), registerUser);
export default router;
