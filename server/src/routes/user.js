const router = require("express").Router();

module.exports = (db) => {
  const { user } = db.models;
  router.post("/register", (req, res) => {
    const { email, password } = req.body;
    user
      .create({ email, password })
      .then((data) => {
        console.log("user registered!!!!");
        req.session.email = data.dataValues.email;
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log(err.errors[0].message);
        res.status(400).send({ msg: err.errors[0].message });
      });
  });

  router.get("/login", (req, res) => {
    const email = req.session.email;
    if (!email) {
      // res.send({ message: "not logged in" });
      return;
    }
    user
      .findAll({
        where: {
          email,
        },
      })
      .then((data) => {
        console.log(data);
        res.sendStatus(200);
      });
  });

  router.post("/logout", (req, res) => {
    req.session = null;
    console.log("Logout successfully!!!!");
    res.sendStatus(200);
  });
  return router;
};
