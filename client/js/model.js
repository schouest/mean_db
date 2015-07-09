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

	/*factory.delUseclass = function (deleteUseclass, callback){ //unimplemented
			$http.get('/delclass/'+deleteUseclass._id).success(function(){
			    callback();
			 })
	}  */  
    return factory;
});

my_App.factory('userFactory', function ($http){
    var users = [];
    var factory = {};
    factory.getUsers = function (callback){
	    $http.get('/getusers').success(function(output) {
			    callback(output);
	  })
    }

    factory.addUser = function (newUser, callback){
    	console.log("newUser in client model ",newUser);
    	$http.post('/adduser', newUser).success(function() {
			    callback();
	  	})
    }

	factory.delUser = function (deleteUser, callback){ //unimplemented
			$http.get('/udelete/'+deleteUser._id).success(function(){
			    callback();
			 })
	}    
    return factory
});

my_App.factory('teamFactory', function ($http){
    var teams = [];
    var factory = {};
    var newTeam = [];
    var selected = [];
    factory.getTeams = function (callback){
	    /*$http.get('/getteams').success(function(output) {
			    callback(output);
	  })*/
			callback();//temp
    }

    factory.addTeam = function (newTeam, callback){
    	console.log("newTeam in client model ",newTeam);
    	/*$http.post('/addteam', newTeam).success(function() {
			    callback();
	  	})*/
			callback();//temp
    }

	factory.delTeam = function (deleteTeam, callback){ //unimplemented
			$http.get('/tdelete/'+deleteTeam._id).success(function(){
			    callback();
			 })
	}


	factory.getNewTeam = function (callback){
		callback(newTeam,selected);
	}

	factory.addMember = function(newmember){
		newTeam.push(newmember);
	}

	factory.removeMember = function(index){
		console.log('going to remove member at index # ',index);
		newTeam.splice(index,1);
	}

	factory.resetTeam = function(){
		newTeam = [];
		selected = [];
	}
    return factory
});

