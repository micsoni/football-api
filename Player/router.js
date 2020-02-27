const { Router } = require("express");
const Player = require("./model");
const Team = require("../Team/model");

const router = new Router();

router.get("/players", (req, res, next) => {
  Player.findAll()
    .then(player => {
      res.json(player);
    })
    .catch(next);
});

router.post("/players", (req, res, next) => {
  Player.create(req.body)
    .then(player => {
      res.status(201).json(player);
    })
    .catch(next);
});

router.get("/players/:playerId", (req, res, next) => {
  Player.findByPk(req.params.playerId, { include: [Team] })
    .then(player => {
      if (!player) {
        res.status(404).end();
      } else {
        res.json(player);
      }
    })
    .catch(next);
});

router.put("/players/:playerId", (req, res, next) => {
  Player.findByPk(req.params.playerId)
    .then(player => {
      if (player) {
        player.update(req.body).then(player => res.json(player));
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});

module.exports = router;
