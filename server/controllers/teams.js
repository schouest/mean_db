var mongoose = require('mongoose');
var Team = mongoose.model('Team');

module.exports = (function() {
  return {
    show: function(req, res) {
    	Team.find({}, function(err, results) {
    		if(err){
    			console.log(err);
    		} else{
    			res.json(results);
    		}
    	})
    },

    add: function(req, res) {
        var newTeam = new Team(req.body)
        newTeam.changeDate = newTeam.addDate;
        //console.log('about to add to db ',newTeam);
        newTeam.save(function(err) {
            if(err){
                console.log(err);
            } else{
                console.log("making newTeam ",newTeam);
                res.redirect('/');
            }
        }) 
    },

    remove: function(req, res) {
        Team.remove({_id: req.params.id}, function(err, results) {
            if(err){
                console.log(err);
            } else{
                res.redirect('/');
            }
        })
    }
  }
})();