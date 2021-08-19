const router = require("express").Router();
const User = require("../db/models/user");

router.post("/register", (req, res) => {
  const { email, password } = req.body;
  User.create({ email, password })
    .then((user) => {
      console.log("user registered!!!!");
      req.session.email = user.email;
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
    const a = new User();
    a.comparePassword();
    res.sendStatus(400);
    return;
  }
  User.findOne({
    where: {
      email,
    },
  }).then((user) => {
    console.log(user.email);
    res.sendStatus(200);
  });
});

router.post("/logout", (req, res) => {
  req.session = null;
  console.log("Logout successfully!!!!");
  res.sendStatus(200);
});

module.exports = router;
