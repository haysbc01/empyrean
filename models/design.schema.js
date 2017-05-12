var mongoose = require('mongoose');

var designSchema = new mongoose.Schema({
  section: String,
  style: String,
  season: String,
  flower: String,
  color: String,
  image: String,
});

module.exports = mongoose.model('designs', designSchema);