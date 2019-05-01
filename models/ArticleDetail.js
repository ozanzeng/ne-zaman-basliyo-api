var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleDetailSchema = new Schema({
  template_id: {
    type: Number,
    required: [true, '`{PATH}` alanı boş bırakılamaz.']
  },
  title: String,
  description: String,
  content: String,
  articleImgUrl: String,
  pageUrl: String,
  startDate: Date,
  endDate: Date,
  viewCount: Number,
  creatAt: Date,
  updateAt: Date,
  isActive: Boolean
});

module.exports = mongoose.model('articleDetail', ArticleDetailSchema);