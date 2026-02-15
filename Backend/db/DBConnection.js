const mongoose = require("mongoose");
require("dotenv").config();
function database() {
    mongoose.connect(process.env.DB_Connect)
        .then(() => {
            console.log("Data BAse is conneted")
        }).catch((err) => {
            console.log("data base not connected", err)
        })
}
module.exports=database