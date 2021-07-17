const express = require("express");

const app = express();

//routes
const User = require("./Api/Routes/User");

app.use("/User", User);

module.exports = app;
