function logger(req, res, next) {
  console.log("Request URL:", req.url);
  next();
}
module.exports = logger;
