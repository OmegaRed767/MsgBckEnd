const express = require("express");
const routes = express.Router();

routes.get("/get", (req, res, next) => {
  res.status(200).json({
    msg: "get",
  });
});

routes.get("/get/:Id", (req, res, next) => {
  res.status(200).json({
    msg: "get",
    _id: req.params.Id,
  });
});

routes.post("/post", (req, res, next) => {
  res.status(200).json({
    msg: "post",
  });
});

routes.patch("/patch/:Id", (req, res, next) => {
  res.status(200).json({
    msg: "patch",
    _id: req.params.Id,
  });
});

module.exports = routes;
