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


// const authenticate = (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(401).json({ message: "Token missing" });
//   }

//   const token = authHeader.split(" ")[1];

//   try {
//     const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
//     req.user = decoded; // userId, email available here
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: "Invalid token" });
//   }
// };

