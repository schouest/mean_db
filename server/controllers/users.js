var mongoose = require('mongoose');
var User = mongoose.model('User');
var Useclass = mongoose.model('UseClass');

module.exports = (function() {
  return {
    show: function(req, res) {
    	User.find({}, function(err, results) {
    		if(err){
    			console.log(err);
    		} else{
    			res.json(results);
    		}

    	})
    },

    add: function(req, res) {
        var classId = req.body.type;        
        Useclass.find({_id: classId}, function(err, results) {
            if(err){
                console.log(err);
            } else{
                    var newUse = new User(req.body)
                    newUse.changeDate = newUse.addDate;
                    newUse.level = results[0].level;
                    newUse.title = results[0].name;
                    newUse.save(function(err) {
                        if(err){
                            console.log(err);
                        } else{
                            console.log("making newUser ",newUse);
                            res.redirect('/');
                        }
                    })
            }
        })

        
    },

    remove: function(req, res) {
        User.remove({_id: req.params.id}, function(err, results) {
            if(err){
                console.log(err);
            } else{
                res.redirect('/');
            }
        })
    }
  }
})();