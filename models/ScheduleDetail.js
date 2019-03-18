var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScheduleDetailSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  article: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    default: null
  },
  pageUrl: String,
  startDate: Date,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updateAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('scheduleDetail', ScheduleDetailSchema);