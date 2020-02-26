const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const { Router } = express;
const router = new Router();
router.get("/", (request, response) =>
  response.send("Welcome to the homepage!")
);

app.use(router);
app.listen(port, () => console.log("listening on port " + port));
