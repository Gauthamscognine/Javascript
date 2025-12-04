const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log("Products router used");
  next();
});// this is router level middle ware , only works for this products middleware 


const {addProducts,getProducts,deleteProducts,updateProducts}= require("../controllers/productController");
const checkAdmin  = require("../middlewares/checkAdmin");
const checkAdmin  = require("../middlewares/auth.js");
const checkAdmin  = require("../middlewares/logger.js");


router.get("/", getProducts);
router.post("/", addProducts);
router.put("/:id", updateProducts);
router.delete("/:id", checkAdmin ,auth.js , logger.js ,deleteProducts);// this is a type of middlewware in which we are importing from other middleware fiolder , 
// mainly we make use of them for reusable 

module.exports = router;

