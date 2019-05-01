var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  userPermition_id: {
    type: Number,
    required: [true, '`{PATH}` alanı boş bırakılamaz.']
  },
  userDetail_id: {
    type: Number,
    required: [true, '`{PATH}` alanı boş bırakılamaz.']
  },
  username: {
    type: String,
    required: [true, '`{PATH}` alanı boş bırakılamaz.'],
    unique: true
  },
  password: {
    type: String,
    required: [true, '`{PATH}` alanı boş bırakılamaz.'],
    minlength: 6
  },
  lastLogin: Date,
  isActive: Boolean
});

module.exports = mongoose.model('user', UserSchema);
