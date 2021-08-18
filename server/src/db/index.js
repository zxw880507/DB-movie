const db = require("./db");
const User = require("./models/user");

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    User.sync({ force: true }).then(() => console.log("db synced!!!"));
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = db;
