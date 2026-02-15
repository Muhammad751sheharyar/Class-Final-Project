const mongoose=require("mongoose");


const produts=new mongoose.Schema ({
  
    productName:{
        type:String,
        required:true
    },

})


const ProductData=mongoose.model("productdata",produts);
module.exports=ProductData