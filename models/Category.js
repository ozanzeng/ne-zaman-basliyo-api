var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
  title: {
    type: String,
    required: [true, '`{PATH}` alanı boş bırakılamaz.']
  },
  isMain: {
    type: Boolean,
    require: [true, '`{PATH}` alanı boş bırakılamaz.']
  },
  position: {
    type: Number,
    require: [true, '`{PATH}` alanı boş bırakılamaz.']
  },
  line: {
    type: Number,
    require: [true, '`{PATH}` alanı boş bırakılamaz.']
  }
});

module.exports = mongoose.model('category', CategorySchema);