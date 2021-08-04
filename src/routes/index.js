const router = require("express").Router();
require("dotenv").config();

router.use("/ping", require("./ping")(process.env.api_key));

module.exports = router;
