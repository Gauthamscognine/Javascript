
import jwt from "jsonwebtoken"


// export const authenticate = (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(401).json({ message: "Token missing" });
//   }

//   const token = authHeader.split(" ")[1];

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // userId, email available here
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: "Invalid token" });
//   }
// };



export const authenticate = (req, res, next) => {
  let token;

  // 1️⃣ Try Authorization header first (recommended way)
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  // 2️⃣ Fallback to query param (for browser testing)
  if (!token && req.query.token) {
    token = req.query.token;
  }

  // 3️⃣ No token found
  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  // 4️⃣ Verify token
  try {
    const decoded = jwt.verify(token, process.env.REFERESH_TOKEN_SECRET);
    req.user = decoded; // { userId, roleid, email, ... }
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};


export const   authorizeRole = (allowedRoles = []) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!allowedRoles.includes(req.user.roleid)) {
      return res.status(403).json({
        message: "Sorry ,  You don't have permission for this endpoint"
      });
    }

    next();
  };
};



// JWT Tokens
// CSRF 
// Use cases of debounce and throttling
// google authentication
// diff dbs present in diff servers using prisma
// Validation with Joi/Zod



// follow - come after 
// bif larfe - enormous 
// clarity - vivet 
