"use strict";

const express = require("express");
const app = express();

function start(port) {
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
}

app.get("/", (req, res) => {
  res.status(200).send("home route");
});

app.get("/data", (req, res) => {
  res.status(200).json({
    name: "Jalal",
    email: "jalalsahoory@yahoo.com",
  });
});

module.exports = {
  app: app,
  start: start,
};
