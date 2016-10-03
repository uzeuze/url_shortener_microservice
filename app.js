var express = require("express");
var mongoose = require("mongoose");
var path = require("path");

var routes = require("./routes");

var app = express();
mongoose.connect("mongodb://localhost:27017/test");
app.set("port", process.env.PORT || 3000);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(routes);

app.listen(app.get("port"), function() {
  console.log("Server started on port " + app.get("port"));
});