var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScheduleDetailSchema = new Schema({
  title: {
    type: String,
    required: [true, '`{PATH}` alanı boş bırakılamaz.']
  },
  description: {
    type: String,
    required: [true, '`{PATH}` alanı boş bırakılamaz.']
  },
  article: {
    type: String,
    required: [true, '`{PATH}` alanı boş bırakılamaz.']
  },
  imageUrl: {
    type: String,
    default: null
  },
  pageUrl: String,
  startDate: Date,
  createdAt: {
    type: Date,
    default: Date.now,
    min: Date.now
  },
  updateAt: {
    type: Date,
    default: Date.now,
    min: Date.now
  }
});

module.exports = mongoose.model('scheduleDetail', ScheduleDetailSchema);