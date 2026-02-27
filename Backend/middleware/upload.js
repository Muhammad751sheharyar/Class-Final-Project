const multer = require("multer");

const storage = multer.memoryStorage(); // file RAM me 
const upload = multer({ storage });

module.exports = upload;