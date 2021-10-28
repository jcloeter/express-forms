const express = require("express");
const app = express();
const path = require("path");

const formImportData = require("./routes/loginFormRoute");

const homeRoute = require("./routes/homeRoute");
// const loginFormRoute = require("./routes/loginFormRoute");
const loggedInRoute = require("./routes/loggedInRoute");
const pageNotFoundRoute = require("./routes/pageNotFound");

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

app.use("/logged-in-user", loggedInRoute);
// app.use("/login", loginFormRoute);
app.use("/login", formImportData.router);
app.use("/", homeRoute);
app.use("/", pageNotFoundRoute);

app.listen(3000);
