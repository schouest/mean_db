var mongoose = require('mongoose');

var ProjectSchema = new mongoose.Schema({
  name: String,
  team: String,
  addDate: Date,
  changeDate: Date
});
mongoose.model('Project', ProjectSchema);
