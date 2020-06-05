const express = require("express");
const app = express();

const { sum } = require("../utils/utils");

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/sum", function (req, res) {
  const param = +req.query.val;
  console.log("param is", param);
  res.send(`sum of [1 to ${param}] is ${sum(param)}`);
});

module.exports = app;
