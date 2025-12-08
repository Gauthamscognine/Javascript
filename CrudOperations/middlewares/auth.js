function auth(req, res, next) {
  const token = req.headers.token;

  if (!token) return res.send("No token, access denied");

  next();
}
module.exports = auth;
