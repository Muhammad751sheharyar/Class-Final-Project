const jwt = require("jsonwebtoken");
require("dotenv").config();

const middleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    req.user = null
    return next();
  }
  console.log(token);

  try {
    const decodedtoken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedtoken
    console.log(req.user);
  } catch (err) {
    console.log(err)
    req.user=null
  }
  next();
}
module.exports = middleware;
