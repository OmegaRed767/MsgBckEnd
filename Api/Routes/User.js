const express = require("express");
const routes = express.Router();
// Mongoose
const mongoose = require("mongoose");
// UserSchema
const User = require("../Models/User");
// BcryptJS
const bcrypt = require("bcryptjs");

routes.get("/get", (req, res, next) => {
  res.status(200).json({
    msg: "get handeled",
  });
});

routes.get("/get/:Id", (req, res, next) => {
  res.status(200).json({
    msg: "get handeled",
    _id: req.params.Id,
  });
});

routes.post("/SignUp", (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then((doc) => {
      if (doc.length > 0) {
        return res.status(404).json({ msg: "user exists" });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(200).json(err);
          }
          if (hash) {
            const user = new User({
              _id: mongoose.Types.ObjectId(),
              email: req.body.email,
              password: hash,
            });
            user
              .save()
              .then((val) => {
                return res.status(200).json(val);
              })
              .catch((Err) => {
                return res.status(400).json(Err);
              });
          }
        });
      }
    })
    .catch((err) => {
      res.status(400).json({ msg: err });
    });
});

routes.post("/Login", (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then((doc) => {
      if (doc.length <= 0) {
        return res.status(404).json({ msg: "User Dosent Exists" });
      } else {
        bcrypt.compare(req.body.password, doc[0].password, (err, hash) => {
          if (err) {
            return res.status(200).json(err);
          }
          if (hash) {
            return res.status(404).json({ msg: "login Successfull" });
          }
          return res.status(400).json({ msg: "login unsuccessful" });
        });
      }
    })
    .catch((Err) => {
      return res.status(400).json(Err);
    });
});

routes.patch("/patch/Id", (req, res, next) => {
  res.status(200).json({
    msg: "patched",
    _id: req.params.Id,
  });
});

routes.delete("/delete/Id", (req, res, next) => {
  res.status(200).json({
    msg: "Deleted",
    _id: req.params.Id,
  });
});
module.exports = routes;
