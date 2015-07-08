var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  level: Number,
  title: String,
  dob: Date,
  addDate: Date,
  changeDate: Date
});
mongoose.model('User', UserSchema);
