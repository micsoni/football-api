const db = require("../db");
const Sequelize = require("sequelize");

const Player = db.define("player", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  number: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Player;
