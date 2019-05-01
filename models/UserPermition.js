var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserPermitionSchema = new Schema({
  title: {
    type: String,
    unique: true
  }
});

module.exports = mongoose.model('userPermition', UserPermitionSchema);