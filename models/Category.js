var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
  mainCategory_id: {
    type: Number,
    required: [true, '`{PATH}` alanı boş bırakılamaz.']
  },
  title: {
    type: String,
    unique: true
  },
  line: Number,
  isActive: Boolean,
  // position: {
  //   type: Number,
  //   require: [true, '`{PATH}` alanı boş bırakılamaz.']
  // },
});

module.exports = mongoose.model('category', CategorySchema);