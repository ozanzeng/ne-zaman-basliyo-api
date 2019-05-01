var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  category_id: {
    type: Number,
    required: [true, '`{PATH}` alanı boş bırakılamaz.']
  },
  menu_id: {
    type: Number,
    required: [true, '`{PATH}` alanı boş bırakılamaz.']
  },
  user_id: {
    type: Number,
    required: [true, '`{PATH}` alanı boş bırakılamaz.']
  },
  articleDetail_id: {
    type: Number,
    required: [true, '`{PATH}` alanı boş bırakılamaz.']
  },
  isActive: Boolean
});

module.exports = mongoose.model('article', ArticleSchema);