const express = require("express");

const app = express();

const morgan = require("morgan");

const bodyParser = require("body-parser");

const cors = require("cors");

const mongoose = require("mongoose");
// routes
const User = require("./Api/Routes/User");
const Message = require("./Api/Routes/Message");
//connect to db
mongoose
  .connect(
    "mongodb+srv://Pro_duct:anbu2561@cluster0.3jqjn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("connect to db");
  })
  .catch((err) => {
    console.log(err);
  });
// cors
app.use(cors());
// logger
app.use(morgan("dev"));
//body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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
