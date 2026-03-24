import express from "express"

import { signUp, LogIn, LogOut } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signUp);

router.post("/login", LogIn);

router.post("/logout", LogOut);

export default router;