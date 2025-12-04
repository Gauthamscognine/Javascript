function validateProduct(req, res, next) {
  if (!req.body.name) return res.send("Product name required");
  next();
}
module.exports = validateProduct;
