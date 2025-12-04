const express = require("express");
const router = express.Router();

const {addUser,getUser,deleteUser,updateUser}= require("../controllers/userController");

router.get("/", getUser);
router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;

