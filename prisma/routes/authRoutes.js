import express from "express";
import { register, login , refreshAccessToken , logout} from "../controllers/authController.js";
import { googleCallback , googleLogin } from "../controllers/googleAuthController.js";
import {  authenticate ,authorizeRole} from "../middlewares/authentication.js";
import {csrfProtection} from "../middlewares/csurf.js"
import { getCsrfToken } from "../controllers/authController.js";
import jwt   from "jsonwebtoken";
import csurf from "csurf";

const router = express.Router();


router.post("/register", register);
router.post("/login", login);
router.post("/refresh",refreshAccessToken);
router.get("/logout",authenticate , logout)

router.get("/google",googleLogin);
router.get("/google/callback",googleCallback)


router.get("/csrf-token", csrfProtection, getCsrfToken);

export default router;




