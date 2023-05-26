import { Router } from "express";
// Controller imports
import { register, login, logout } from "../controllers/authController.js";

const authRoute = Router()

authRoute.post("/register", register)
authRoute.post("/login", login);
authRoute.post("/logout", logout);


export default authRoute