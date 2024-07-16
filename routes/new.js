const express = require("express");
const indexRoute = require("./index");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("form");
});

module.exports = router;
