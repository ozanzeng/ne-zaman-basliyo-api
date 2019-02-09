var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  isMain: {
    type: Boolean,
    require: true
  }
});

module.exports = mongoose.model('category', CategorySchema);