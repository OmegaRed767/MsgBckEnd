const express = require("express");
const routes = express.Router();

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

routes.post("/post", (req, res, next) => {
  const info = {
    email: req.body.email,
    password: req.body.password,
  };
  res.status(200).json({
    msg: "Post handeled",
    info,
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
