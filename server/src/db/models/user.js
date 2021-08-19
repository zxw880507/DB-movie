const { Sequelize } = require("sequelize");
const db = require("../db");

const User = db.define("user", {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: {
      args: true,
      msg: "This email has been registered already!",
    },
    get() {
      return this.getDataValue("email");
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

User.prototype.comparePassword = () => {
  console.log(this);
};

module.exports = User;
