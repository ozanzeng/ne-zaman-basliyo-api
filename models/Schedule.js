var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScheduleSchema = new Schema({
  category_id: Schema.Types.ObjectId,
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: null
  },
  startDate: Date,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updateAt: {
    type: Date,
    default: Date.now

  },
  pageUrl: String,
  viewCount: Number,
  isActive: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('schedule', ScheduleSchema);