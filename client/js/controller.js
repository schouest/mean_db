my_App.controller('useclassesController', function (useclassFactory){
        var that = this;
          that.useclasses = [];
          useclassFactory.getUseclasses(function (data){
              that.useclasses = data;
          })
            
      that.addClass = function (){
        /*for (i = 0; i < that.useclasses.length; i++){  //check through list for dupe names
              if(that.newUseclass.name == undefined){
                console.log('ERROR: NO NAME ENTERED FOR NEW USECLASS');
                that.error_txt = 'ERROR: Name left blank';
                return false;
              }
              if(that.useclasses[i].name == that.newUseclass.name){
                console.log("ERROR: NAME MATCHED");
                that.error_txt = 'ERROR: User already exists';
                return false;
              }
        }*/
        that.newUseclass.addDate = new Date();
        useclassFactory.addUseclass(that.newUseclass,function (){
            that.newUseclass = {};// clear the form values
            useclassFactory.getUseclasses(function (data){
                that.useclasses = data;
            })
        })
        that.error_txt = '';//reset error text
		}

      that.removeClass = function (useclass){
          useclassFactory.delUseclass(useclass, function(useclasses){
            useclassFactory.getUseclasses(function (data){
                that.useclasses = data;
            })
          })
    }
      });




my_App.controller('usersController', function (userFactory){
        var that = this;
          that.users = [];
          userFactory.getUsers(function (data){
              that.users = data;
          })
            
      that.addUser = function (){
      	var newdob = new Date(that.newUser.dob);
      		that.newUser.dob = newdob;
      	//console.log('new user in client controller: ', that.newUser);
        /*for (i = 0; i < that.users.length; i++){  //form validation
              
              if(that.newUser.cname == undefined || that.newUser.cname == ""){
                console.log('ERROR: NO NAME ENTERED FOR CUSTOMER');
                that.error_txt = 'ERROR: Name left blank';
                return false;
              }
              if(that.newUser.pname.name == undefined){
                console.log('ERROR: NO PRODUCT SELECTED');
                that.error_txt = 'ERROR: Product left blank';
                return false;
              }
              if(typeof that.newUser.count != 'number' || that.newUser.count < 1){
                console.log('ERROR: INVALID QUANTITY');
                that.error_txt = 'ERROR: Invalid Quantity';
                return false;
              }
              if(that.users[i].pname == that.newUser.pname.name
                && that.users[i].cname == that.newUser.cname){
                console.log("ERROR: USER ALREADY PLACED USER");
                that.error_txt = 'ERROR: User already placed user for that item';
                return false;
              }
        }*/

        that.newUser.addDate = new Date();

        userFactory.addUser(that.newUser, function (){
              that.newUser = {};// clear the form values
               userFactory.getUsers(function (data){
                  that.users = data;
              })
        })
        that.error_txt = '';//reset error text
    }


    var currentTime = new Date();
that.currentTime = currentTime;
that.month = ['Januar', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
that.monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
that.weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
that.weekdaysLetter = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
that.today = 'Today';
that.clear = 'Clear';
that.close = 'Close';
that.onStart = function () {
    console.log('onStart');
};
that.onRender = function () {
    console.log('onRender');
};
that.onOpen = function () {
    console.log('onOpen');
};
that.onClose = function () {
    console.log('onClose');
};
that.onSet = function () {
    console.log('onSet');
};
that.onStop = function () {
    console.log('onStop');
};

});


my_App.controller('teamsController', function (teamFactory){
        var that = this;
          that.teams = [];
          that.newteam = {};
          teamFactory.getTeams(function (data){
              that.teams = data;
          })

          var getNewTeam = function(){
              teamFactory.getNewTeam(function (data){
              that.newteam = data;
              })
          }         
          getNewTeam();
          console.log('pulled new team from model, showing in controller ',that.newteam);

      that.addTeam = function (){
        /*for (i = 0; i < that.teams.length; i++){  //check through list for dupe names
              if(that.newteam.name == undefined){
                console.log('ERROR: NO NAME ENTERED FOR NEW TEAM');
                that.error_txt = 'ERROR: Name left blank';
                return false;
              }
              if(that.teams[i].name == that.newteam.name){
                console.log("ERROR: NAME MATCHED");
                that.error_txt = 'ERROR: User already exists';
                return false;
              }
        }*/
        that.newteam.addDate = new Date();
        teamFactory.addTeam(that.newteam,function (){
            that.newteam = {};// clear the form values
            teamFactory.getTeams(function (data){
                that.teams = data;
            })
        })
        that.error_txt = '';//reset error text
    }

      that.removeTeam = function (team){
          teamFactory.delTeam(team, function(teams){
            teamFactory.getTeams(function (data){
                that.teams = data;
            })
          })
      }

      that.addUser = function (newmember){
        teamFactory.addMember(newmember);
        getNewTeam();
 
      }

      that.removeUser = function (param){
        console.log(param);
      }

      that.resetNewTeam = function(){
          teamFactory.resetTeam();
          getNewTeam();
      }

});
