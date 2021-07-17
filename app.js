const express = require("express");

const app = express();

//routes
const User = require("./Api/Routes/User");
const Message = require("./Api/Routes/Message");

app.use("/User", User);
app.use("/Message", Message);

module.exports = app;
