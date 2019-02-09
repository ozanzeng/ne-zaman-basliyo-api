var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScheduleSchema = new Schema({
  categoryId: Schema.Types.ObjectId,
  scheduleDetailId: Schema.Types.ObjectId,
  viewCount: Number,
  isActive: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('schedule', ScheduleSchema);