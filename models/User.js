var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'E-Posta alanı zorunludur.'],
    unique: true
  },
  password: {
    type: String,
    minlength: 8
  }
});

module.exports = mongoose.model('user', UserSchema);
