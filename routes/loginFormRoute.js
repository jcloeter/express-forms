const { application } = require("express");
const express = require("express");
const router = express.Router();

router.use(express.urlencoded({ extendable: false }));

let data = [];

router.post("/validate-user", (req, res, next) => {
  console.log("Shit User");
  data.push(req.body.username);
  data.push(req.body.password);
  console.log(req.body.username);
  console.log(req.body.password);

  if (req.body.username.length > 0) {
    res.redirect("/logged-in-user");
  }

  console.log("Not admin :)");
});

//Why did router not handle it correctly with 'get'?
router.get("/", (req, res, next) => {
  console.log("Login Page");
  res.render("loginForm", {
    pageTitle: "Login",
  });
});

exports.router = router;
exports.userData = data;
