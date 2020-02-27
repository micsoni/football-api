const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4000;
const teamRouter = require("./Team/router");
const playerRouter = require("./Player/router");

app.use(bodyParser.json());
app.use(teamRouter);
app.use(playerRouter);
app.get("/", (request, response) => response.send("Welcome to the homepage!"));

app.listen(port, () => console.log("listening on port " + port));
