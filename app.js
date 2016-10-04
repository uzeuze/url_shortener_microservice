var express = require("express");
var mongoose = require("mongoose");
var path = require("path");

var routes = require("./routes");

var app = express();
var url = process.env.MONGOLAB_URI || "mongodb://localhost:27017/url-shortener";
mongoose.connect(url);
app.set("port", process.env.PORT || 3000);

app.use(express.static(path.resolve(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get('/', function(req, res) {
  res.render('home');
});

app.use(routes);

app.listen(app.get("port"), function() {
  console.log("Server started on port " + app.get("port"));
});
