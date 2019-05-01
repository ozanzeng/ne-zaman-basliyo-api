var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserDetailSchema = new Schema({
  firstName: String,
  lastName: String,
  registerAt: Date
});

module.exports = mongoose.model('userDetail', UserDetailSchema);