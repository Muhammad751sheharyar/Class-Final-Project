const multer = require("multer");

const storage = multer.memoryStorage(); // file RAM me ayegi
const upload = multer({ storage });

module.exports = upload;