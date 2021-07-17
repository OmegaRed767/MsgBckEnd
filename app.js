const express = require("express");

const app = express();

app.use("/msg", (req, res, next) => {
  res.status(200).json({ msg: "Hello World" });
});

module.exports = app;
