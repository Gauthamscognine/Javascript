import jwt from "jsonwebtoken"

export const authenticate = (req, res, next) => {
  let token;

  
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  
  if (!token && req.query.token) {
    token = req.query.token;
  }

  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  
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

