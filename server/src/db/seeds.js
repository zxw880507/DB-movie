const User = require("./models/user");

module.exports = () => {
  User.create({ email: "zxw880507@gmail.com", password: "111111" }).then(() =>
    console.log("seeds imported")
  );
};
