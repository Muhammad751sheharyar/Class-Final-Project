const jwt = require("jsonwebtoken");
require("dotenv").config();

const middleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    
    res.status(404).json({
      message:"token not avaliable"
    })
  }
  console.log(token);

  try {
    const decodedtoken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedtoken
    console.log(req.user);
  } catch (err) {
    res.status(404).json({
      message:"token not avaliable"
    })
  }
  next();
}
module.exports = middleware;
