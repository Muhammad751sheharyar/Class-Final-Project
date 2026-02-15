const express=require("express");
const {Signup,Login} = require("../controllers/auth");
const {Product, findProduct ,}=require("../controllers/productControllers")
const router=express.Router();
const middleware=require("../middleware/auth_middleware")

router.post("/Signup",Signup)

router.post("/Login",Login)
router.post("/Product",Product)
router.get("/get",findProduct)
router.get("/Dashboard",middleware, (req, res) => {
  res.json({
    message: "Welcome  This is a public dashboard route!"
  });
});
module.exports=router