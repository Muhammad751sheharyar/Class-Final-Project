const ProductData = require("../model/produtModel");

const Product = async (req, res) => {
    const { productName,Categry,Price } = req.body
    const newproduct = new ProductData({ productName,Categry,Price });
    newproduct.save();
    res.send({
        message: "product created"
    })
}


const findProduct = async (req, res) => {
    const productFind = await ProductData.find()
    res.send({
        message: "product get successfully",
        productFind
    })
}


const Update = async (req, res) => {
    try {
        const productUpdate = req.params.id;
        console.log(productUpdate);
        const updatePorduct = await Product.finByIdAndUpdate({ _id: productUpdate }, req.body, {
            new: save

        })
        console.log(updatePorduct)
        if (!productUpdate) {
            return res.send({
                message: "prduct is not exist"
            })
        }
    } catch (err) {
        err

    }
}



const deleteProduct = async (req, res) => {
    try {
        const { id } = req.query;
        const delet = await ProductData.findByIdAndDelete(id);
        console.log(delet)
        res.send({
            message:"product successfully deleted"
        })
    } catch (err) {
        res.send({
            message:"product successfully deleted"
        })
        err
    }
}
module.exports = { Product, findProduct, Update, deleteProduct }