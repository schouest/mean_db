var mongoose = require('mongoose');

var TeamSchema = new mongoose.Schema({
  tname: String,
  roster: Array,
  addDate: Date,
  changeDate: Date
});
mongoose.model('Team', TeamSchema);
