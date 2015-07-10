var mongoose = require('mongoose');
var Project = mongoose.model('Project');

module.exports = (function() {
  return {
    show: function(req, res) {
    	Project.find({}, function(err, results) {
    		if(err){
    			console.log(err);
    		} else{
    			res.json(results);
    		}
    	})
    },

    add: function(req, res) {
        var newProject = new Project(req.body)
        newProject.changeDate = newProject.addDate;
        //console.log('about to add to db ',newProject);
        newProject.save(function(err) {
            if(err){
                console.log(err);
            } else{
                console.log("making newProject ",newProject);
                res.redirect('/');
            }
        }) 
    },

    remove: function(req, res) {
        Project.remove({_id: req.params.id}, function(err, results) {
            if(err){
                console.log(err);
            } else{
                res.redirect('/');
            }
        })
    }
  }
})();