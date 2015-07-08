my_App.factory('useclassFactory', function ($http){
    var useclasses = [];
    var factory = {};
    factory.getUseclasses = function (callback){
	    $http.get('/getclasses').success(function(output) {
			    callback(output);
	  })
    }

    factory.addUseclass = function (newUseclass, callback){
    	$http.post('/addclass', newUseclass).success(function() {
			    callback();
	  	})
    }

	factory.delUseclass = function (deleteUseclass, callback){
			$http.get('/delclass/'+deleteUseclass._id).success(function(){
			    callback();
			 })
	}    
    return factory;
});