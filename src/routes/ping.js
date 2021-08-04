const router = require("express").Router();

module.exports = (api_key) => {
  router.get("/", (req, res) => {
    res.status(200).json({ success: true, key: api_key || null });
  });
  return router;
};
