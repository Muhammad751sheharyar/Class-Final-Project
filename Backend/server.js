const express = require("express");
const middleware=require("./middleware/auth_middleware")
const app = express();
const cookieParser=require("cookie-parser")
require("dotenv").config();
const router = require("./Router/route")
const database = require("./db/DBConnection")
const PORT = 3000;
app.use(express.json());
app.use(cookieParser())
app.use(middleware)

database()
app.post("/home", (req, res) => {
    res.send("hello world")
})
app.use("/api", router)

app.listen(PORT, () => {
    console.log(`server is running 3000`)
})