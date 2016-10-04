var mongoose = require("mongoose");

var urlSchema = mongoose.Schema({
  uid: String,
  url: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

var Url = mongoose.model("Url", urlSchema);
module.exports = Url;
