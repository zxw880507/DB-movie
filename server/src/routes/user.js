const router = require("express").Router();

module.exports = (db) => {
  const { user } = db.models;
  router.post("/register", (req, res) => {
    const { email, password } = req.body;
    user
      .create({ email, password })
      .then(() => console.log("user registered!!!!"));
  });
  return router;
};
