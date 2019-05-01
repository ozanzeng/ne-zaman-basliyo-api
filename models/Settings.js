var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SettingsSchema = new Schema({
  pageTitle: String,
  copyright: String,
  logoImgUrl: String,
  facebook: String,
  instagram: String,
  twitter: String,
  isActive: Boolean
});

module.exports = mongoose.model('settings', SettingsSchema);