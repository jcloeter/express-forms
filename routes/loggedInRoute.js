const express = require("express");
const router = express.Router();

const formData = require("./loginFormRoute");

// console.log(formData.userData);
//Testing to handle post request in this route now:
// router.post("/sign-in", (req, res, next) => {
//   console.log("hi john route");
//   res.send("<h1>Hi John</h1>");
// });

router.get("/", (req, res, next) => {
  console.log("Thanks for loggin in!");
  console.log(formData.userData);

  res.render("loggedInUser", {
    pageTitle: "User",
    userList: formData.userData,
  });
});

module.exports = router;
