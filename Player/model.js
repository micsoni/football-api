const db = require("../db");
const Sequelize = require("sequelize");
const Team = require("../Team/model");

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

Player.belongsTo(Team);

module.exports = Player;
