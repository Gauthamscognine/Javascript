import express from "express";
import { register, login , refreshAccessToken , logout} from "../controllers/authController.js";
import { googleCallback , googleLogin } from "../controllers/googleAuthController.js";
import jwt   from "jsonwebtoken";

const router = express.Router();


const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token missing" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded; // userId, email available here
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

router.post("/register", register);
router.post("/login", login);
router.post("/refresh",refreshAccessToken);
router.get("/logout",authenticate , logout)


router.get("/google",googleLogin);
router.get("/google/callback",googleCallback)

export default router;
