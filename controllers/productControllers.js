const ProductData=require("../model/produtModel");

const Product=async(req,res)=>{
const{productName}=req.body
const newproduct= new ProductData({productName});
newproduct.save();
res.send({
    message:"product created"
})
}


const findProduct=async(req,res)=>{
    const productFind=await newproduct.findOne({productName})
    res.send({
        message:"product get successfully"
    })
}


module.exports={Product,findProduct}