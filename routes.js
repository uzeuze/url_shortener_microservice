var express = require("express");
var Url = require("./models/url");
var validUrl = require('valid-url');
var router = express.Router();

router.get('/:id', function(req, res) {
  var id = req.params.id;
  Url.find({uid: id}, function (err, docs) {
    if (err) res.status(404).send(err);
    if (docs && docs.length) {
      res.redirect(docs[0].url);
    } else {
      res.status(404).send("Invalid URL");
    }
  });
});

router.get("/new/*", function(req, res) {
  var uid = Math.random().toString(36).slice(-8);
  var url = req.params[0];
  if (!validUrl.isWebUri(url)) {
      return res.json({error: "Invalid URL"});
  }
  var link = Url.create({
    uid: uid,
    url: url
  });
  res.json({
    "original_url": url,
    "short_url": "http://url-shortener-uze.herokuapp.com/" + uid
  });
});
module.exports = router;
