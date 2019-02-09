var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScheduleSchema = new Schema({
  category_id: Schema.Types.ObjectId,
  schedule_detail_id: Schema.Types.ObjectId,
  viewCount: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('schedule', ScheduleSchema);