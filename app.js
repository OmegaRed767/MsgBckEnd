const express = require("express");

const app = express();

//routes
const User = require("./Api/Routes/User");
const Message = require("./Api/Routes/Message");

app.use("/User", User);
app.use("/Message", Message);

// handel error
app.use((req, res, next) => {
  const error = new Error("Uh Ho Error Occured");
  error.status = 500;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(500 || error.status);
  res.json({ msg: error.message });
});

module.exports = app;
