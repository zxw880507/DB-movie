const router = require("express").Router();
const helpers = require("../helpers/helpers");
require("dotenv").config();

router.use("/ping", require("./ping")(process.env.api_key));
router.use("/movie", require("./movie")(process.env.api_key, helpers));
module.exports = router;
