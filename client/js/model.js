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

my_App.factory('userFactory', function ($http){
    var users = [];
    var factory = {};
    factory.getUsers = function (callback){
	    /*$http.get('/users').success(function(output) {
			    callback(output);
	  })*/
		callback(); //temp
    }

    factory.addUser = function (newUser, callback){
    	console.log("newUser in client model ",newUser);
    	/*$http.post('/adduser', newUser).success(function() {
			    callback();
	  	})*/
		callback(); //temp

    }

	factory.delUser = function (deleteUser, callback){
			$http.get('/delete/'+deleteUser._id).success(function(){
			    callback();
			 })
	}    
    return factory
});

