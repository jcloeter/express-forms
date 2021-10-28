const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("Will this run?");
  res.render("home", { pageTitle: "Home" });
});

module.exports = router;
