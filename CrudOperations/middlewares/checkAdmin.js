function checkAdmin(req, res, next) {
  const isAdmin = true; // dummy
  if (!isAdmin) {
    return res.send("Access denied");
  }
  next();
}
module.exports = checkAdmin;