var mongoose = require('mongoose');

var TeamSchema = new mongoose.Schema({
  tname: String,
  roster: Array,
  addDate: Date,
  leader: String,
  changeDate: Date
});
mongoose.model('Team', TeamSchema);
