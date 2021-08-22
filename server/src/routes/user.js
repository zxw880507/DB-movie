const router = require("express").Router();
const User = require("../db/models/user");

router.post("/register", (req, res) => {
  const { email, password } = req.body;
  User.create({ email, password })
    .then((user) => {
      console.log("user registered!!!!");
      req.session.email = user.email;
      res.json({ email: user.email });
    })
    .catch((err) => {
      console.log(err.errors[0].message);
      res.status(400).send({ msg: err.errors[0].message });
    });
});

router.get("/login", (req, res) => {
  const email = req.session.email;
  if (!email) {
    return;
  }
  User.findOne({
    where: {
      email,
    },
  })
    .then((user) => {
      if (!user) {
        return;
      }
      res.json({ userId: user.id, email: user.email });
    })
    .catch((err) => {
      throw err;
    });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({
    where: {
      email,
    },
  })
    .then((user) => {
      if (!user) {
        res.status(400).send({ email: "No account found with this email." });
      } else if (!user.comparePassword(password)) {
        res.status(400).send({ password: "Password didn't match. Try again." });
      } else {
        req.session.email = user.email;
        res.json({ userId: user.id, email: user.email });
      }
    })
    .catch((err) => {
      throw err;
    });
});
router.post("/logout", (req, res) => {
  req.session = null;
  console.log("Logout successfully!!!!");
  res.sendStatus(200);
});

router.post("/favorites", (req, res) => {
  const { user, source } = req.body;
  User.findByPk(user.userId).then((user) =>
    user.addMedium(source).then((res) => console.log(res))
  );
  // .then((res) => console.log(res));
});

router.delete("/favorites", (req, res) => {
  console.log(req);
});

module.exports = router;
