var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TemplateSchema = new Schema({
  title: String,
  backgroundImgUrl: String,
  isActive: Boolean,
});

module.exports = mongoose.model('template', TemplateSchema);