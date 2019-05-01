var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MenuSchema = new Schema({
  mainMenu_id: {
    type: Number,
    required: [true, '`{PATH}` alanı boş bırakılamaz.']
  },
  menuPosition_id: {
    type: Number,
    required: [true, '`{PATH}` alanı boş bırakılamaz.']
  },
  category_id: {
    type: Number,
    required: [true, '`{PATH}` alanı boş bırakılamaz.']
  },
  title: {
    type: String,
    unique: true
  },
  line: Number,
  isActive: Boolean,
});

module.exports = mongoose.model('menu', MenuSchema);