const express=require("express");
const {Signup,Login} = require("../controllers/auth");
const {Product, findProduct ,Update,deleteProduct}=require("../controllers/productControllers")
const router=express.Router();
const middleware=require("../middleware/auth_middleware")
router.post("/Signup",Signup)
router.post("/Login",Login)
router.post("/Product",Product)
router.get("/get",findProduct)
router.put("/Update/id",Update);
router.delete("/delete",deleteProduct)
const cloudinary = require("../config/cloudnary");
const upload = require("../middleware/upload");

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const file = req.file;

    const result = await cloudinary.uploader.upload_stream(
      { folder: "react_uploads" },
      (error, result) => {
        if (error) return res.status(500).json(error);
        res.json({ imageUrl: result.secure_url });
      }
    );

    result.end(file.buffer);
  } catch (err) {
    res.status(500).json({ message: "Upload Failed" });
  }
});






router.get("/Dashboard",middleware, (req, res) => {
  res.json({
    message: "Welcome  This is a public dashboard route!"
  });
});
module.exports=router