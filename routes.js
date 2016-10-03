var express = require("express");
var Url = require("./models/url");
var router = express.Router();

router.get('/:id', function(req, res) {
  var id = parseInt(req.params.id,10);
  if(Number.isNaN(id)) {
    res.status(404).send("Invalid Short URL");
  } else {
    Url.find({uid: id}, function (err, docs) {
      if (err) res.status(404).send(err);
      if (docs && docs.length) {
        res.redirect(docs[0].url);
      } else {
        res.status(404).send("Invalid Short URL");
      }
    });
  }
});

router.get("/new/*?", function(req, res) {
  var uid = Math.floor(Math.random()*10000)
  var url = req.params[0]
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
