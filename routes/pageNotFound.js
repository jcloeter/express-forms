const express = require("express");
const router = express.Router();

router.use("/", (req, res, next) => {
  console.log("NOT FOUND");
  res.render("pageNotFound", { pageTitle: "Not Found" });
});

module.exports = router;
