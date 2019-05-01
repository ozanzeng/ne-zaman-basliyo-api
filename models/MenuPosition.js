var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MenuPositionSchema = new Schema({
  title: {
    type: String,
    required: [true, '`{PATH}` alanı boş bırakılamaz.']
  },
});

module.exports = mongoose.model('menuPosition', MenuPositionSchema);