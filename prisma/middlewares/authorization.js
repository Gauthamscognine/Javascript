// import {jwt} from "jsonwebtoken"

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
