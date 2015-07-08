var mongoose = require('mongoose');
var Useclass = mongoose.model('UseClass');

module.exports = (function() {
  return {
    show: function(req, res) {
    	Useclass.find({}, function(err, results) {
    		if(err){
    			console.log(err);
    		} else{
    			res.json(results);
    		}

    	})
    },

    add: function(req, res) {

        var newClass = new Useclass(req.body)
        newClass.save(function(err) {
            if(err){
                console.log(err);
            } else{
                res.redirect('/');
            }
        })
    },

    remove: function(req, res) {
        Useclass.remove({_id: req.params.id}, function(err, results) {
            if(err){
                console.log(err);
            } else{
                res.redirect('/');
            }
        })
    }
  }
})();