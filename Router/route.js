const express=require("express");
const {Signup,Login} = require("../controllers/auth");
const {Product, findProduct ,}=require("../controllers/productControllers")
const router=express.Router();

router.post("/Signup",Signup)

router.post("/Login",Login)
router.post("/Product",Product)
router.get("/get",findProduct)
module.exports=router