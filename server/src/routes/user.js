const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../db/models/user");
const Medium = require("../db/models/medium");
const Favorite = require("../db/models/favorite");

router.post("/register", (req, res) => {
  const { email, password } = req.body;
  User.create({ email, password })
    .then((user) => {
      console.log("user registered!!!!");

      const accessToken = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.accessTokenSecret
      );
      res.json({ userId: user.id, email: user.email, accessToken });
    })
    .catch((err) => {
      console.log(err.errors[0].message);
      res.status(400).send({ msg: err.errors[0].message });
    });
});

router.get("/login", (req, res) => {
  const { accessToken } = req.query;
  jwt.verify(accessToken, process.env.accessTokenSecret, (err, decoded) => {
    if (err) {
      res.send(null);
    } else {
      User.findOne({
        where: {
          email: decoded.email,
        },
      })
        .then((user) => {
          if (!user) {
            res.send(null);
          }
          res.json({ userId: user.id, email: user.email });
        })
        .catch((err) => {
          throw err;
        });
    }
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
        const accessToken = jwt.sign(
          { userId: user.id, email: user.email },
          process.env.accessTokenSecret
        );

        res.json({ userId: user.id, email: user.email, accessToken });
      }
    })
    .catch((err) => {
      throw err;
    });
});
router.post("/logout", (req, res) => {
  console.log("Logout successfully!!!!");
  res.sendStatus(200);
});

router.get("/favorites", (req, res) => {
  const { userId } = req.query;
  User.findByPk(userId, {
    include: { model: Medium, through: { attributes: [] } },
  })
    .then((userData) => res.json(userData.media))
    .catch((err) => console.log(err));
});

router.post("/favorites", async (req, res) => {
  const { user, source } = req.body;

  const currentUser = await User.findByPk(user.userId);
  let currentMedium = await Medium.findByPk(source.id);
  if (!currentMedium) {
    currentMedium = await Medium.create(source);
  }
  currentUser
    .addMedium(currentMedium)
    .then(() => res.sendStatus(201))
    .catch((err) => console.log(err));
});

router.delete("/favorites", (req, res) => {
  const { user, source } = req.body;
  Favorite.destroy({
    where: {
      userId: user.userId,
      mediumId: source.id,
    },
  })
    .then(() => res.sendStatus(201))
    .catch((err) => console.log(err));
});

module.exports = router;
