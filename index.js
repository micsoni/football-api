const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const teamRouter = require("./Team/router");

app.use(teamRouter);
app.get("/", (request, response) => response.send("Welcome to the homepage!"));

app.listen(port, () => console.log("listening on port " + port));
